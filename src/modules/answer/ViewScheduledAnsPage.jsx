import router, { useRouter } from "next/router";
import { validate } from "uuid";
import React, { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { InfoText } from "../../ui/InfoText";
import { MainLayout } from "../layouts/MainLayout";
import { MiddlePanel } from "../layouts/GridPanels";
import { EditScheduleAnsModalController } from "../scheduled-rooms/EditScheduleAnsModalController";
import { ScheduledAnsCard } from "../scheduled-rooms/ScheduledAnsCard";
import { HeaderController } from "../display/HeaderController";
import { PageHeader } from "../../ui/mobile/MobileHeader";

export const ViewScheduledAnsPage = ({}) => {
    const queryClient = useQueryClient();
    const [deleted, setDeleted] = useState(false);
    const { query } = useRouter();
    const id = typeof query.id === "string" ? query.id : "";
    const key = `/scheduled-room/${id}`;
    const { data, isLoading } = useQuery(key, { enabled: validate(id) });

    if (!data || isLoading) {
        return null;
    }

    if ("error" in data || !data.room) {
        return (
            <MainLayout>
                <InfoText>could not find room</InfoText>
            </MainLayout>
        );
    }

    return (
        <MainLayout
            mobileHeader={
                <PageHeader
                    title="Scheduled Ans"
                    onBackClick={() => router.push("/dash")}
                />
            }
        >
            <HeaderController title={data.room.name} embed={{}} />
            <MiddlePanel>
                {deleted ? (
                    <InfoText>deleted</InfoText>
                ) : (
                    <EditScheduleAnsModalController
                        onScheduledAns={(_editInfo, values, _resp) => {
                            queryClient.setQueryData <
                                GetScheduledAnsById >
                                (key,
                                {
                                    room: {
                                        ...data.room,
                                        name: values.name,
                                        description: values.description,
                                        scheduledFor:
                                            values.scheduledFor.toISOString(),
                                    },
                                });
                        }}
                    >
                        {({ onEdit }) => (
                            <ScheduledAnsCard
                                info={data.room}
                                onDeleteComplete={() => setDeleted(true)}
                                noCopyLinkButton
                                onEdit={() =>
                                    onEdit({
                                        scheduleAnsToEdit: data.room,
                                        cursor: "",
                                    })
                                }
                            />
                        )}
                    </EditScheduleAnsModalController>
                )}
            </MiddlePanel>
        </MainLayout>
    );
};

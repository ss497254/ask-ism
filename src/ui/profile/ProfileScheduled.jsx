import React, { useState } from "react";
import { ScheduledAnsCard } from "../modules/scheduled-rooms/ScheduledAnsCard";
import { useQuery } from "react-query";
import { useUpdateQuery } from "../shared-hooks/useUpdateQuery";
import { Button } from "./Button";
import { CenterLoader } from "./CenterLoader";
import { EditScheduleAnsModalController } from "../modules/scheduled-rooms/EditScheduleAnsModalController";

const List = ({
    onLoadMore,
    cursor,
    isLastPage,
    isOnlyPage,
    userId,
    onEdit,
}) => {
    const { isLoading, data } = useQuery(
        ["getScheduledAnswers", cursor, "all", userId].join("/"),
        { staleTime: Infinity, refetchOnMount: "always" }
    );
    const update = useUpdateQuery();

    if (isLoading) {
        return <CenterLoader />;
    }

    if (!data) {
        return null;
    }

    if (isOnlyPage && data.rooms.length === 0) {
        return (
            <div
                className={`mt-2 bg-primary-800 p-4 rounded-8 w-full leading-8 text-primary-100`}
            >
                {"scheduledAnswers.noneFound"}
            </div>
        );
    }

    return (
        <div className={`${isLastPage ? "mb-24" : ""}`}>
            {data.rooms.map((r) => (
                <div className={`mt-4`} key={r.id}>
                    <ScheduledAnsCard
                        onDeleteComplete={() => {
                            update(
                                ["getScheduledAnswers", cursor, "all", userId],
                                (d) => {
                                    return {
                                        rooms: (d?.rooms || []).filter(
                                            (x) => x.id !== r.id
                                        ),
                                        nextCursor: d?.nextCursor,
                                    };
                                }
                            );
                        }}
                        onEdit={() => onEdit({ cursor, scheduleAnsToEdit: r })}
                        info={r}
                    />
                </div>
            ))}
            {isLastPage && data.nextCursor ? (
                <div className={`flex justify-center my-4`}>
                    <Button
                        size="small"
                        onClick={() => onLoadMore(data.nextCursor)}
                    >
                        {"loadMore"}
                    </Button>
                </div>
            ) : null}
        </div>
    );
};

export const ProfileScheduled = ({ user, className = "" }) => {
    const [{ cursors, userId }, setQueryState] = useState({
        cursors: [""],
        userId: user.id,
    });
    const update = useUpdateQuery();

    return (
        <div
            className={`mt-2 rounded-8 w-full leading-8 ${className}`}
            style={{ maxWidth: 640 }}
        >
            <EditScheduleAnsModalController
                onScheduledAns={(editInfo, data, _resp) => {
                    update(
                        ["getScheduledAnswers", editInfo.cursor, userId],
                        (d) => {
                            return {
                                rooms: (d?.rooms || []).map((x) =>
                                    x.id === editInfo.scheduleAnsToEdit.id
                                        ? {
                                              ...x,
                                              name: data.name,
                                              description: data.description,
                                              scheduledFor:
                                                  data.scheduledFor.toISOString(),
                                          }
                                        : x
                                ),
                                nextCursor: d?.nextCursor,
                            };
                        }
                    );
                }}
            >
                {({ onEdit }) =>
                    cursors.map((cursor, i) => (
                        <List
                            userId={userId}
                            onLoadMore={(o) =>
                                setQueryState({
                                    cursors: [...cursors, o],
                                    userId,
                                })
                            }
                            onEdit={onEdit}
                            isOnlyPage={cursors.length === 1}
                            isLastPage={cursors.length - 1 === i}
                            key={cursor}
                            cursor={cursor}
                        />
                    ))
                }
            </EditScheduleAnsModalController>
        </div>
    );
};

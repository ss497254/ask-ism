import React, { useState } from "react";
import { useConn } from "../../shared-hooks/useConn";
import { useQuery } from "react-query";
import { useUpdateQuery } from "../../shared-hooks/useUpdateQuery";
import { Button } from "../../ui/Button";
import { CenterLoader } from "../../ui/CenterLoader";
import { FeedHeader } from "../../ui/FeedHeader";
import { MiddlePanel } from "../layouts/GridPanels";
import { CreateScheduleAnsModal } from "./CreateScheduledAnsModal";
import { EditScheduleAnsModalController } from "./EditScheduleAnsModalController";
import { ScheduledAnsCard } from "./ScheduledAnsCard";

const Page = ({
    onLoadMore,
    cursor = 0,
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
        return <div className={`mt-8 text-xl ml-4`}>{"noneFound"}</div>;
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

export const ScheduledAnswersList = ({}) => {
    const [open, setOpen] = useState(false);
    const [{ cursors, userId }, setQueryState] = useState({
        cursors: 0,
        userId: "342342",
    });
    const update = useUpdateQuery();
    const conn = useConn();

    return (
        <>
            {open ? (
                <CreateScheduleAnsModal
                    onScheduledAns={(data, resp) => {
                        update(["getScheduledAnswers", "all", userId], (d) => {
                            return {
                                rooms: [
                                    {
                                        roomId: null,
                                        creator: conn.user,
                                        creatorId: conn.user.id,
                                        description: data.description,
                                        id: resp.scheduledAns.id,
                                        name: data.name,
                                        numAttending: 0,
                                        scheduledFor:
                                            data.scheduledFor.toISOString(),
                                    },
                                    ...(d?.rooms || []),
                                ],
                                nextCursor: d?.nextCursor,
                            };
                        });
                    }}
                    onRequestClose={() => setOpen(false)}
                />
            ) : null}
            <MiddlePanel
                stickyChildren={
                    <FeedHeader
                        actionTitle={"scheduleAnsHeader"}
                        onActionClicked={() => {
                            setOpen(true);
                        }}
                        title={"Title"}
                    />
                }
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
                            <Page
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
            </MiddlePanel>
        </>
    );
};

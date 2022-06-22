import React, { useEffect, useState } from "react";
// import { useCurrentAnsIdStore } from "../../global-stores/useCurrentAnsIdStore";
import { ContributorBadge, StaffBadge } from "../../icons/badges";
// import { useConn } from "../../shared-hooks/useConn";
import useWindowSize from "../../shared-hooks/useWindowSize";
import { ProfileBlock } from "../../ui/profile/ProfileBlock";
import { Spaces } from "../../ui/components/Spaces";
import { UserSummaryCard } from "../../ui/profile/UserSummaryCard";
// import { CreateScheduleAnsModal } from "../scheduled-rooms/CreateScheduledAnsModal";
// import { MinimizedAnsCardController } from "./MinimizedAnsCardController";

export const ProfileBlockController = ({}) => {
    const [upcomingCount, setUpcomingCount] = useState(3);
    // const { currentAnsId } = useCurrentAnsIdStore();
    const conn = {
        user: {
            id: 342354,
            displayName: "Saurabh Singh",
            contributions: 5,
            bio: "bio me kya rakha hai saalo",
            username: "ss497254",
            staff: true,
            numFollowers: 253,
            numFollowing: 69,
            website: "https://ss497254.github.io",
            avatarUrl: "/img/ss497254.png",
        },
    };
    const [showCreateScheduleAnsModal, setShowCreateScheduleAnsModal] =
        useState(false);
    // const { data } = useQuery(["getScheduledAnswers"].join("/"));
    // const update = useUpdateQuery();
    const { height } = useWindowSize();

    const badges = [];
    if (conn.user.staff) {
        badges.push({
            content: <StaffBadge />,
            variant: "accent",
            title: "Member",
            naked: true,
        });
    }

    if (conn.user.contributions > 0) {
        badges.push({
            content: (
                <ContributorBadge contributions={conn.user.contributions} />
            ),
            variant: "accent",
            title: `${"Contributor"} (${
                conn.user.contributions
            } ${"Contributions"})`,
        });
        badges.push({
            content: "bot",
            variant: "primary",
            title: "bot",
        });
    }

    useEffect(() => {
        if (height && height < 780) {
            setUpcomingCount(2);
        } else {
            setUpcomingCount(3);
        }
    }, [height]);

    return (
        <>
            {/* {showCreateScheduleAnsModal ? (
                <CreateScheduleAnsModal
                    onScheduledAns={(srData, resp) => {
                        update(["getScheduledAnswers", ""], (d) => {
                            return {
                                rooms: [
                                    {
                                        roomId: null,
                                        creator: conn.user,
                                        creatorId: conn.user.id,
                                        description: srData.description,
                                        id: resp.scheduledAns.id,
                                        name: srData.name,
                                        numAttending: 0,
                                        scheduledFor:
                                            srData.scheduledFor.toISOString(),
                                    },
                                    ...(d?.rooms || []),
                                ],
                                nextCursor: d?.nextCursor,
                            };
                        });
                    }}
                    onRequestClose={() => setShowCreateScheduleAnsModal(false)}
                />
            ) : null} */}
            <ProfileBlock
                top={
                    // currentAnsId ? (
                    //     <MinimizedAnsCardController />
                    // ) :
                    <UserSummaryCard
                        onClick={() => {}}
                        badges={badges}
                        website=""
                        isOnline={false}
                        {...conn.user}
                        username={"ss497254"}
                    />
                }
                bottom={
                    <Spaces
                        onCreateScheduledAns={() =>
                            setShowCreateScheduleAnsModal(true)
                        }
                        rooms={[
                            {
                                id: 757,
                                title: "General",
                                speakersInfo: {
                                    speakers: ["saurabh", "sahil"],
                                    avatars: [
                                        "/img/ss497254.png",
                                        "/img/male-1a.jpg",
                                        "/img/male-1b.jpg",
                                    ],
                                },
                            },
                            {
                                id: 857,
                                title: "Health",
                                speakersInfo: {
                                    speakers: ["saurabh", "sahil", "sameer"],
                                    avatars: [
                                        "/img/ss497254.png",
                                        "/img/male-1c.jpg",
                                        "/img/female-1c.jpg",
                                    ],
                                },
                            },
                            {
                                id: 8527,
                                title: "Academics",
                                speakersInfo: {
                                    speakers: ["saurabh", "sahil", "sameer"],
                                    avatars: [
                                        "/img/ss497254.png",
                                        "/img/female-1a.jpg",
                                        "/img/female-1b.jpg",
                                    ],
                                },
                            },
                            {
                                id: 8157,
                                title: "CSE 1st year",
                                speakersInfo: {
                                    speakers: ["saurabh", "sahil"],
                                    avatars: ["/img/ss497254.png"],
                                },
                            },
                        ]}
                        // rooms={
                        // data?.rooms.slice(0, upcomingCount).map((sr) => ({
                        //     onClick: () => {

                        //     },
                        //     id: sr.id,
                        //     scheduledFor: new Date(sr.scheduledFor),
                        //     title: sr.name,
                        //     speakersInfo: {
                        //         avatars: [sr.creator.avatarUrl],
                        //         speakers: [sr.creator.username],
                        //     },
                        // })) ||
                        //     []
                        // }
                    />
                }
            />
        </>
    );
};

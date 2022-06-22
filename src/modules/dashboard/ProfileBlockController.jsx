import React, { useEffect, useState } from "react";
import { useConn } from "../../shared-hooks/useConn";
import useWindowSize from "../../shared-hooks/useWindowSize";
import { ProfileBlock } from "../../ui/profile/ProfileBlock";
import { Spaces } from "../../ui/components/Spaces";
import { UserSummaryCard } from "../../ui/profile/UserSummaryCard";

export const ProfileBlockController = ({}) => {
    const conn = useConn();

    return (
        <>
            <ProfileBlock
                top={
                    <UserSummaryCard
                        isOnline={true}
                        {...conn.user}
                        username={"ss497254"}
                    />
                }
                bottom={
                    <Spaces
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
                    />
                }
            />
        </>
    );
};

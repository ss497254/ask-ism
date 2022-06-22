import React, { useEffect, useState } from "react";
import { useConn } from "../../shared-hooks/useConn";
import { Button } from "../../ui/components/Button";
// import { CenterLoader } from "../../ui/CenterLoader";
// import { InfoText } from "../../ui/InfoText";
import { UserProfile } from "../../ui/profile/UserProfile";
// import { EditProfileModal } from "./EditProfileModal";
// import { VerticalUserInfoWithFollowButton } from "./VerticalUserInfoWithFollowButton";

export const UserProfileController = ({}) => {
    const conn = useConn();
    // let { conn.user, isLoading } = useQuery(
    //     ["getUserProfile", query.username].join("/"),
    //     {
    //         enabled:
    //             typeof query.username === "string" &&
    //             !!query.username &&
    //             !isServer,
    //         refetchOnMount: "always",
    //     }
    // );

    // if (isLoading) {
    //     return <CenterLoader />;
    // }

    // if (!conn.user || ("error" in conn.user && conn.user.error.includes("could not find"))) {
    //     return <InfoText>{"Could Not Find User"}</InfoText>;
    // } else if ("error" in conn.user && conn.user.error.includes("blocked")) {
    //     return <InfoText>You have been blocked by this user.</InfoText>;
    // } else if ("error" in conn.user) {
    //     return <InfoText>{conn.user.error}</InfoText>;
    // }
    // console.log({ conn.user });

    return (
        <>
            <UserProfile
                user={conn.user}
                isCurrentUser={conn.user.id === conn.user.id}
            />
            <Button
                btn="accent"
                // style={{ marginRight: "10px" }}
                // size="small"
                // onClick={() => push(`/voice-settings`)}
            >
                {"Voice Settings"}
            </Button>
            <Button
                style={{ marginRight: "10px" }}
                size="small"
                // onClick={() => push(`/overlay-settings`)}
            >
                {"Overlay Settings"}
            </Button>
            <Button
                size="small"
                // onClick={() => push(`/privacy-settings`)}
            >
                {"Privacy Settings"}
            </Button>
            {/* {conn.user.id === conn.user.id && (
                <div className={`pt-6 pb-6 flex`}>


                    <Button
                        style={{ marginRight: "10px" }}
                        size="small"
                        onClick={() => push(`/sound-effect-settings`)}
                    >
                        {"Sound Settings"}
                    </Button>
                    </div> 
            )} */}
        </>
    );
};

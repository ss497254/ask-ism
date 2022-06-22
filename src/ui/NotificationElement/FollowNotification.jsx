import React from "react";
import { GenericNotification } from "./GenericNotification";
import { SingleUser } from "../UserAvatar/SingleUser";
import { Button } from "../Button";

export const FollowNotification = ({
    userAvatarSrc,
    isOnline = false,
    username,
    userProfileLink,
    time,
    following = false,
}) => {
    const icon = (
        <SingleUser src={userAvatarSrc} size="sm" isOnline={isOnline} />
    );

    const notificationMsg = (
        <>
            <a
                className="font-bold"
                {...(userProfileLink ? { href: userProfileLink } : {})}
            >
                {username}
            </a>
            <span>&nbsp;followed you</span>
        </>
    );

    const followButton = (
        <Button
            size="small"
            color={following ? "secondary" : "primary"}
            style={{ width: "90px" }}
        >
            {following ? "Following" : "Follow back"}
        </Button>
    );

    return (
        <GenericNotification
            icon={icon}
            notificationMsg={notificationMsg}
            time={time}
            actionButton={followButton}
        />
    );
};

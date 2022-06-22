import React from "react";
import { SingleUser } from "./UserAvatar";

export const AnsAvatar = ({
    isMe,
    src,
    username,
    flair,
    muted,
    deafened,
    onClick,
    canSpeak,
    id,
    activeSpeaker,
    isBot,
}) => {
    const avatar = (
        <SingleUser
            activeSpeaker={activeSpeaker}
            size="lg"
            src={src}
            muted={muted}
            isBot={isBot}
            deafened={deafened}
            username={username}
            hover={true}
        />
    );
    return (
        <button className={`flex flex-col items-center`} onClick={onClick}>
            {avatar}
            <div
                className={`flex items-center mt-2 ${
                    deafened ? "opacity-60" : ""
                }`}
            >
                <span className={`truncate text-primary-100 text-sm block`}>
                    {username}
                </span>
                {flair}
            </div>
        </button>
    );
};

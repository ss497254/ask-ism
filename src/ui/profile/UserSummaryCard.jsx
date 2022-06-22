import React from "react";

import { SingleUser } from "../UserAvatar";
import { UserBadge } from "./UserBadge";

export const Badges = ({ badges }) => {
    return (
        <>
            {badges.map(
                ({ content, variant, color, classname, title, naked }, i) => (
                    <UserBadge
                        title={title}
                        variant={variant}
                        color={color}
                        className={classname}
                        key={i}
                    >
                        {content}
                    </UserBadge>
                )
            )}
        </>
    );
};

const regex = /(^\w+:|^)\/\//;

export const Website = ({ website }) => {
    return (
        <a
            className="text-accent mt-3 font-bold px-1"
            href={website}
            target="_blank"
            rel="noreferrer"
        >
            {website.replace(regex, "")}
        </a>
    );
};

export const UserSummaryCard = ({
    onClick,
    displayName,
    username,
    badges,
    numFollowers,
    numFollowing,
    bio,
    website,
    isOnline,
    avatarUrl,
}) => {
    return (
        <div className="flex flex-col rounded-8 p-4 w-full border border-gray-200 dark:border-zinc-700 dark:text-white bg-stone-100 dark:bg-dark-800">
            <button className="flex" onClick={onClick}>
                <div className="flex">
                    <SingleUser
                        size="default"
                        isOnline={isOnline}
                        src={avatarUrl}
                    />
                </div>
                <div className="flex mt-2">
                    <div className="flex flex-col ml-3 gap-1">
                        <span className="font-bold text-lg overflow-hidden break-all text-left">
                            {displayName}
                        </span>
                        <span className="text-left break-all dark:text-gray-300">
                            @{username}
                        </span>
                        <span className="flex mt-1">
                            <Badges badges={badges} />
                        </span>
                    </div>
                </div>
            </button>
            <div className="flex mt-3 justify-between">
                <div className="flex transition duration-200 ease-in-out hover:bg-gray-200 px-2 py-1 rounded-8">
                    <span className="font-bold">{numFollowers}</span>
                    <span className="ml-1.5 lowercase">{"Questions"}</span>
                </div>
                <div className="flex transition duration-200 ease-in-out hover:bg-gray-200 px-2 py-1 rounded-8">
                    <span className="font-bold">{numFollowing}</span>
                    <span className="ml-1.5 lowercase">{"Answers"}</span>
                </div>
            </div>
            <div className="flex mt-3 break-words text-left px-1">{bio}</div>
            {website && <Website website={website} />}
        </div>
    );
};

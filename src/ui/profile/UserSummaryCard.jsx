import React from "react";
import { SolidLink } from "../../icons";
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
            className="text-accent mt-3 font-bold text-left break-all truncate whitespace-pre-wrap line-clamp-1 w-[90%]"
            href={website}
            target="_blank"
            rel="noreferrer"
        >
            {<SolidLink className="inline-block mr-1" />}
            {website.replace(regex, "")}
            {/* {website} */}
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
        <div className="flex flex-col rounded-8 p-4 w-full dark:text-white bg-stone-100 dark:bg-dark-800">
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
                <div className="flex transition duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1 rounded-8">
                    <span className="font-bold">{numFollowers}</span>
                    <span className="ml-1.5 lowercase">{"Questions"}</span>
                </div>
                <div className="flex transition duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1 rounded-8">
                    <span className="font-bold">{numFollowing}</span>
                    <span className="ml-1.5 lowercase">{"Answers"}</span>
                </div>
            </div>
            <div className="flex mt-3 break-words text-left">{bio}</div>
            {website && <Website website={website} />}
        </div>
    );
};

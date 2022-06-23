import React from "react";
import { SolidLink } from "../../icons";
import { SingleUser } from "../UserAvatar";
import { Badge } from "./Badge";
import { SolidCompass } from "../../icons";
import { Link } from "react-router-dom";

const regex = /(^\w+:|^)\/\//;

export const Website = ({ website }) => {
    return (
        <a
            className="text-accent mt-1 font-bold text-left truncate whitespace-pre-wrap line-clamp-1 w-[90%]"
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
    avatarUrl,
    displayName,
    username,
    questions = 0,
    answers = 0,
    bio,
    website,
    isOnline,
    staff,
}) => {
    return (
        <div className="flex flex-col rounded-8 p-4 w-full dark:text-white bg-stone-100 dark:bg-dark-800">
            <div className="flex">
                <SingleUser size="default" src={avatarUrl} />
                <div className="flex mt-2">
                    <div className="flex flex-col ml-3">
                        <Link to="/profile">
                            <span className="font-bold text-lg overflow-hidden text-left">
                                {displayName}
                            </span>
                        </Link>
                        <span className="text-left text-[13px] mb-1 dark:text-gray-300">
                            @{username}
                        </span>
                        {staff && (
                            <Badge
                                variant="blue"
                                title={staff}
                                className="mt-1"
                            >
                                {staff}
                            </Badge>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex mt-2 gap-2 text-[13px]">
                <div className="flex transition duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1 rounded-8">
                    <span className="font-bold">{questions}</span>
                    <span className="ml-1.5">{"Questions"}</span>
                </div>
                <div className="flex transition duration-200 ease-in-out hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-1 rounded-8">
                    <span className="font-bold">{answers}</span>
                    <span className="ml-1.5">{"Answers"}</span>
                </div>
            </div>
            <div className="my-1 truncate text-tiny whitespace-pre-wrap line-clamp-2">
                {bio}
            </div>
            {website && <Website website={website} />}
        </div>
    );
};

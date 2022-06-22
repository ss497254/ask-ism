import React, { useEffect, useState } from "react";
import { SolidTime } from "../../icons";
import { BubbleText } from "./BubbleText";
import { CardHeading } from "./CardHeading";
import { Tag } from "./Tag";
import { MultipleUsers, SingleUser } from "../UserAvatar";

export const Card = ({
    text,
    subtitle,
    avatarUrl,
    listeners,
    tags,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className="flex flex-col justify-between w-full p-4 rounded-lg transition duration-200 ease-in-out bg-gray-50 dark:bg-zinc-900 dark:text-white outline lg:outline-1 hover:outline-2 outline-gray-300 dark:outline-zinc-700 hover:outline-slate-300 dark:hover:outline-zinc-600 mb-4"
        >
            <CardHeading text={text} />
            <div className="flex flex-col w-full">
                <div className="flex flex-row space-x-2 w-full my-3">
                    {tags.slice(0, 5).map((tag, idx) => (
                        <Tag key={idx} glow={true}>
                            {tag}
                        </Tag>
                    ))}
                </div>
                <div className="flex flex-row justify-between w-full">
                    {avatarUrl ? (
                        <SingleUser
                            className="mr-2"
                            size="xxs"
                            src={avatarUrl}
                        />
                    ) : null}
                    <div className="text-left break-all truncate whitespace-pre-wrap line-clamp-2">
                        {subtitle}
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex flex-shrink-0">
                        <BubbleText live={listeners > 0}>
                            {listeners > 0 ? listeners : "No Answers yet"}
                        </BubbleText>
                    </div>
                </div>
            </div>
        </div>
    );
};

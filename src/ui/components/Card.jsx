import React, { useState } from "react";
import { OutlineLike } from "../../icons";
// import { Input } from "./Input";
import { SolidCaretRight, SolidFullscreen } from "../../icons";
import { SingleUser } from "../UserAvatar";
import { BubbleText } from "./BubbleText";
import { Button } from "./Button";
import { CardHeading } from "./CardHeading";
import { Tag } from "./Tag";

export const Card = ({
    text,
    subtitle,
    avatarUrl,
    answers = 0,
    tags,
    onlikeChange = () => {},
    like = 0,
}) => {
    const [expand, setExpand] = useState(false);
    return (
        <div className="flex flex-col justify-between w-full p-4 rounded-lg ease-in-out bg-gray-50 dark:bg-dark-800 dark:text-white outline lg:outline-1 hover:outline-2 outline-gray-300 dark:outline-dark-700 hover:outline-slate-300 dark:hover:outline-dark-600 mb-4">
            <CardHeading text={text} />
            <div className="flex flex-col w-full mt-2">
                <div className="flex flex-row gap-2 w-full my-1">
                    {tags.slice(0, 5).map((tag, idx) => (
                        <Tag key={idx}>{tag}</Tag>
                    ))}
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-1">
                    {avatarUrl ? (
                        <SingleUser
                            className="mr-2"
                            size="xms"
                            src={avatarUrl}
                        />
                    ) : null}
                    <div className="text-left break-all truncate whitespace-pre-wrap line-clamp-1 w-[30%]">
                        {subtitle}
                    </div>
                    <div className="flex-grow"></div>
                    <div className="flex gap-2">
                        <Button
                            className="w-8 h-5"
                            btn="light"
                            onClick={() => onlikeChange(1)}
                        >
                            <OutlineLike
                                className={`inline-block stroke-green-500 ${
                                    like == 1
                                        ? "text-green-500"
                                        : "text-transparent"
                                }`}
                                size="18"
                            />
                        </Button>
                        <Button
                            className="w-8 h-5"
                            btn="light"
                            onClick={() => onlikeChange(-1)}
                        >
                            <OutlineLike
                                className={`inline-block ${
                                    like == -1
                                        ? "text-accent"
                                        : "text-transparent"
                                } rotate-180 stroke-accent transform`}
                                size="18"
                            />
                        </Button>
                    </div>
                </div>
                <button
                    className="flex flex-row justify-between items-center w-full mt-2 bg-sky-100 dark:bg-gray-800 px-3 py-2 rounded-md"
                    onClick={() => setTimeout(() => setExpand(!expand), 150)}
                >
                    <div className="flex flex-shrink-0">
                        <BubbleText live={answers > 0}>
                            {answers > 0 ? answers : "No Answers yet"}
                        </BubbleText>
                    </div>
                    <div className="flex-grow"></div>
                    <SolidCaretRight
                        className={
                            "rounded-full mr-1 " +
                            (expand ? "rotate-180 transform" : "")
                        }
                        size="18"
                    />
                </button>
                {expand && (
                    <div className="flex gap-2 mt-2 rounded-md">
                        <Button className="w-8 h-5 gap-2">
                            <span className="text-sm">Read</span>
                            <SolidFullscreen size="10" />
                        </Button>
                        <Button className="w-8 h-5">
                            <span className="text-sm">Write</span>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

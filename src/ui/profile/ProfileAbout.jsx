import React from "react";
import { SolidLink } from "../../icons";
import { UserBadgeLg } from "./UserBadgeLg";

export const ProfileAbout = ({
    username,
    followers,
    following,
    description,
    link,
    tags,
    className = "",
}) => {
    return (
        <div
            className={`mt-2 p-4 dark:text-white rounded-8 w-full leading-8 ${className}`}
            // style={{ maxWidth: 640 }}
        >
            <div className="font-bold text-xl pb-2">
                {"About"} {username}
            </div>
            <div className="flex mb-2 gap-5">
                <div className="">
                    <span className="font-bold">{followers}</span>
                    <span className="ml-1.5">{"Questions"}</span>
                </div>
                <div className="">
                    <span className="font-bold">{following}</span>
                    <span className="ml-1.5">{"Answers"}</span>
                </div>
            </div>
            <div className="flex mt-3 break-words text-left">{description}</div>
            {/* {website && <Website website={"asdf"} />} */}
            {link && (
                <div className="flex flex-row items-center mb-4">
                    <SolidLink className="mr-2" />
                    <a
                        className="text-accent font-bold text-sm"
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {link.replace(/(^\w+:|^)\/\//, "")}
                    </a>
                </div>
            )}
            {tags.map((props) => (
                <div key={props.icon} className="mb-1">
                    <UserBadgeLg {...props} />
                </div>
            ))}
        </div>
    );
};

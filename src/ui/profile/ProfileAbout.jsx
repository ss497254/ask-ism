import React from "react";
import { SolidLink } from "../../icons";
import { UserBadgeLg } from "./UserBadgeLg";
import { Website } from "./UserSummaryCard";

export const ProfileAbout = ({
    username,
    website,
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
            <div className="font-bold text-xl">
                {"About"} {username}
            </div>
            {website && <Website website={website} />}
            <div className="flex mt-3 break-words text-left">{description}</div>
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

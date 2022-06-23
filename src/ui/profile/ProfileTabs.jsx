import React, { useState } from "react";
import { useConn } from "../../shared-hooks/useConn";
import { ProfileAbout } from "./ProfileAbout";
import { ProfileAdmin } from "./ProfileAdmin";
import { ProfileScheduled } from "./ProfileScheduled";

export const ProfileTabs = ({
    className,
    user,
    isCurrentUser,
    tabs = {
        about: true,
        questions: true,
        likes: true,
        answers: true,
        recorded: false,
    },
    aboutTags = [],
    ...props
}) => {
    const [activeTab, setActiveTab] = useState("about");
    const conn = useConn();

    let tab = null;
    switch (activeTab) {
        case "about":
            tab = (
                <ProfileAbout
                    username={user.username}
                    followers={user.numFollowers}
                    following={user.numFollowing}
                    description={user.bio}
                    tags={aboutTags}
                    website={user.website}
                />
            );
            break;
        case "questions":
            tab = (
                <ProfileAbout
                    username={user.username}
                    followers={user.numFollowers}
                    following={user.numFollowing}
                    description={user.bio}
                    tags={aboutTags}
                    website={user.website}
                />
            );
            break;
        case "answers":
            tab = <ProfileScheduled user={user} />;
            break;
        case "likes":
            tab = <ProfileAdmin user={user} />;
            break;

        default:
            break;
    }
    return (
        <>
            <div
                className={`w-full flex items-center justify-around dark:text-gray-200 ${className}`}
                {...props}
            >
                <button
                    className={`py-1 text-base font-semibold border-b-2 transition hover:border-accent focus:outline-no-chrome
               ${
                   activeTab === "about"
                       ? `border-accent text-accent`
                       : "border-gray-200 dark:border-gray-700"
               }`}
                    onClick={() => setActiveTab("about")}
                >
                    {"About"}
                </button>
                <button
                    className={`py-1 text-base font-semibold border-b-2 transition hover:border-accent focus:outline-no-chrome
               ${
                   activeTab === "questions"
                       ? `border-accent text-accent`
                       : "border-gray-200 dark:border-gray-700"
               }`}
                    onClick={() => setActiveTab("questions")}
                >
                    {"Questions"}
                </button>
                <button
                    className={`py-1 text-base font-semibold border-b-2 transition hover:border-accent focus:outline-no-chrome
               ${
                   activeTab === "answers"
                       ? `border-accent text-accent`
                       : "border-gray-200 dark:border-gray-700"
               }`}
                    onClick={() => setActiveTab("answers")}
                >
                    {"Answers"}
                </button>
                <button
                    className={`py-1 text-base font-semibold border-b-2 transition hover:border-accent focus:outline-no-chrome
               ${
                   activeTab === "likes"
                       ? `border-accent text-accent`
                       : "border-gray-200 dark:border-gray-700"
               }`}
                    onClick={() => setActiveTab("likes")}
                >
                    {"Likes"}
                </button>
            </div>

            <div className="bg-white dark:bg-dark-800 my-2 rounded-lg md:mx-2">
                {tab}
            </div>
        </>
    );
};

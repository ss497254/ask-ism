import React from "react";
import { SingleUser } from "../../UserAvatar";

export const UserSearchResult = ({
    user,
    className = "",
    onClick = () => undefined,
}) => {
    return (
        <div
            className={`flex cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 items-center w-full rounded-8 ${className}`}
            onClick={onClick}
        >
            <div className="flex mr-3">
                <SingleUser
                    isOnline={user.online}
                    src={user.avatarUrl}
                    size="md"
                />
            </div>
            <div className="flex flex-col">
                <span className="text-black dark:text-white font-bold">
                    {user.displayName}
                </span>
                <span className="text-gray-800 dark:text-gray-200">
                    @{user.username}
                </span>
            </div>
        </div>
    );
};

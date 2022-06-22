import { Link } from "react-router-dom";
import React from "react";
import { MultipleUsers } from "../UserAvatar";

const UserCard = ({ avatars, speakers }) => {
    return (
        <div className="w-full flex items-center">
            <MultipleUsers srcArray={avatars} />
            <div className="flex ml-1 text-gray-700 dark:text-gray-300 text-sm">
                {speakers.join(", ")}
            </div>
        </div>
    );
};

export const ScheduledSpacesCard = ({
    onClick,
    scheduledFor,
    speakersInfo,
    title,
    transition,
}) => {
    return (
        <div
            onClick={onClick}
            className={`flex flex-col justify-between px-4 py-2 w-full bg-warm-gray-200 dark:bg-dark-800 dark:text-white min-h-[70px] border-b border-gray-300 dark:border-gray-800 cursor-pointer last:border-b-0 ${
                transition ? `transition duration-200 ease-in-out` : ``
            } hover:bg-blue-100 z-0`}
        >
            <p className="text-lg">{title}</p>
            <UserCard {...speakersInfo} />
        </div>
    );
};

export const Spaces = ({ rooms }) => {
    return (
        <div className="w-full rounded-lg overflow-hidden flex flex-col">
            <div className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center">
                <h4 className="text-white font-bold">{"Your Spaces"}</h4>
            </div>
            <div className="flex flex-col">
                {rooms.map((room) => (
                    <ScheduledSpacesCard transition key={room.id} {...room} />
                ))}
            </div>

            <div className="px-4 py-2 w-full text-white font-bold bg-blue-400 dark:bg-blue-600">
                <Link to="/scheduled-rooms">{"Explore More Spaces"}</Link>
            </div>
        </div>
    );
};

import { Link } from "react-router-dom";
import React from "react";
import { SolidPlus } from "../../icons";
import { BoxedIcon } from "./BoxedIcon";
import { MultipleUsers } from "../UserAvatar";

const UserCard = ({ avatars, speakers }) => {
    return (
        <div className="w-full flex items-center">
            <MultipleUsers srcArray={avatars} />
            <div className="flex ml-1 text-gray-700 text-sm">
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
            className={`px-4 py-2 w-full bg-warm-gray-200 min-h-[80px] max-h-[80px] flex flex-col gap-2 border-b border-gray-200 cursor-pointer last:border-b-0 ${
                transition ? `transition duration-200 ease-in-out` : ``
            } hover:bg-blue-100 z-0`}
        >
            <p className="text-lg">{title}</p>
            <UserCard {...speakersInfo} />
        </div>
    );
};

export const Spaces = ({ onCreateScheduledAns, rooms }) => {
    return (
        <div className="w-full rounded-lg overflow-hidden flex flex-col">
            <div className="px-4 py-2 bg-emerald-500 border-b border-gray-300 flex justify-between items-center">
                <h4 className="text-white font-bold">{"Your Spaces"}</h4>
                <BoxedIcon
                    onClick={onCreateScheduledAns}
                    style={{ height: "26px", width: "26px" }}
                    transition
                >
                    <SolidPlus width={12} height={12} />
                </BoxedIcon>
            </div>
            <div
                className="flex flex-col overflow-y-scroll"
                style={{ maxHeight: 241 }}
            >
                {rooms.map((room) => (
                    <ScheduledSpacesCard transition key={room.id} {...room} />
                ))}
            </div>

            <div className="px-4 py-2 w-full text-white font-bold bg-blue-400 border-t ">
                <Link to="/scheduled-rooms">{"Explore More Spaces"}</Link>
            </div>
        </div>
    );
};

import React from "react";
import { BubbleText } from "../../components/BubbleText";

export const AnsSearchResult = ({
    room,
    className = "",
    onClick = () => undefined,
}) => {
    return (
        <div
            className={`flex cursor-pointer hover:bg-gray-700 px-4 py-3 w-full rounded-8 ${className}`}
            onClick={onClick}
        >
            <div className="flex flex-col w-full">
                <div className="flex w-full">
                    <span className="text-gray-100 font-bold flex-1 items-center">
                        {room.name}
                    </span>
                    <BubbleText live>234</BubbleText>
                </div>
            </div>
        </div>
    );
};

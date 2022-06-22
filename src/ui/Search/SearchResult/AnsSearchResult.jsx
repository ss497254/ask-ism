import React from "react";
import { BubbleText } from "../../components/BubbleText";
// import { formatNumber } from "../../components/AnsCard";

export const AnsSearchResult = ({
    room,
    className = "",
    onClick = () => undefined,
}) => {
    return (
        <div
            className={`flex cursor-pointer hover:bg-primary-700 px-4 py-3 w-full rounded-8 ${className}`}
            onClick={onClick}
        >
            <div className="flex flex-col w-full">
                <div className="flex w-full">
                    <span className="text-primary-100 font-bold flex-1 items-center">
                        {room.name}
                    </span>
                    <BubbleText live>
                        234
                        {/* {formatNumber(room.numPeopleInside)} */}
                    </BubbleText>
                </div>
                {/* <span className="text-primary-300">
          {room.hosts
            .slice(0, 3)
            .map((x) => x.displayName)
            .join(", ")}
        </span> */}
            </div>
        </div>
    );
};

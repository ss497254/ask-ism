import React from "react";

export const ProfileBlock = ({ top, bottom }) => {
    return (
        <div
            className="flex flex-1 flex-col overflow-y-scroll scrollremove"
            style={{ height: "80vh" }}
        >
            <div className="flex justify-between items-end mb-4 max-w-md">
                {top}
            </div>
            <div className="flex justify-between items-end mb-4 max-w-md">
                {bottom}
            </div>
        </div>
    );
};

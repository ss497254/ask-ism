import * as React from "react";

export const BubbleText = ({ live, children }) => {
    return (
        <div className="font-semibold text-sm items-center">
            <div
                className={`inline-block mr-2 w-2 h-2 rounded-full ${
                    live ? "bg-accent" : "bg-gray-400"
                }`}
            ></div>
            {children}
        </div>
    );
};

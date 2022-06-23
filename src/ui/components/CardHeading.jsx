import React from "react";

export const CardHeading = ({ text }) => {
    const trimtext =
        text.length > 600 ? text.substring(0, 600) + "... ?" : text;
    return (
        <div
            className="flex text-gray-900 dark:text-white w-full"
            style={{ minHeight: 50 }}
        >
            <p className="text-justify leading-7 font-medium">{trimtext}</p>
        </div>
    );
};

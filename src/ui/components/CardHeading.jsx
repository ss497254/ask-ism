import React from "react";

export const CardHeading = ({ text }) => {
    const trimtext =
        text.length > 400 ? text.substring(0, 400) + "... ?" : text;
    return (
        <div
            className="flex text-gray-900 dark:text-white font-bold w-full"
            style={{ minHeight: 50 }}
        >
            <p className="text-justify leading-7">{trimtext}</p>
        </div>
    );
};

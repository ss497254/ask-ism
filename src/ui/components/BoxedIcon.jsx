import React, { ReactElement } from "react";

const colorMap = {
    50: "bg-gray-50 dark:bg-gray-800 dark:text-white",
    100: "bg-gray-100 dark:bg-gray-800 dark:text-white",
    200: "bg-gray-200 dark:bg-gray-800 dark:text-white",
};

export const BoxedIcon = ({
    color = "50",
    children,
    className = "",
    circle = false,
    transition = true,
    hover = true,
    ...props
}) => {
    return (
        <button
            className={`flex ${colorMap[color]} ${
                transition ? `transition duration-200 ease-in-out` : ``
            } ${
                hover ? `` : `hover:bg-gray-600`
            } h-6 w-6 cursor-pointer justify-center items-center ${
                circle ? `rounded-full` : `rounded-8`
            } ${className.includes("text-button") ? "" : "text-dark-100"}
        ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

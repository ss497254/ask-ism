import React, { ReactElement } from "react";

const colorMap = {
    50: "bg-gray-50",
    100: "bg-gray-100",
    200: "bg-gray-200",
};

export const BoxedIcon = ({
    color = "50",
    children,
    className = "",
    circle = false,
    transition = false,
    hover = false,
    ...props
}) => {
    return (
        <button
            className={`flex ${colorMap[color]} ${
                transition ? `transition duration-200 ease-in-out` : ``
            } ${
                hover ? `` : `hover:bg-primary-600`
            } h-6 w-6 cursor-pointer justify-center items-center ${
                circle ? `rounded-full` : `rounded-8`
            } ${className.includes("text-button") ? "" : "text-primary-100"}
        ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

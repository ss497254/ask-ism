import React, { HTMLAttributes } from "react";

const badgeVariants = {
    "gray-700": "text-gray-700",
    gray: "text-gray-600",
    accent: "text-accent",
    white: "text-gray-100",
    grey: "text-gray-300",
};

export const UserBadge = ({
    children,
    variant = "gray-700",
    className = "",
    title = "",
}) => {
    return (
        <>
            <div
                title={title}
                className={`flex ${badgeVariants[variant]} select-none text-xs font-bold justify-center items-center rounded ${className}`}
                style={{
                    minHeight: "20px",
                    width: "max-content",
                }}
            >
                {children}
            </div>
        </>
    );
};

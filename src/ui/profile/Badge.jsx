import React, { HTMLAttributes } from "react";

const badgeVariants = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800",
    accent: "bg-red-100 text-accent dark:bg-red-300",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-800",
    green: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-800",
};

export const Badge = ({
    children,
    variant = "blue",
    className = "",
    title = "",
}) => {
    return (
        <>
            <div
                title={title}
                className={`text-sm font-bold px-2.5 py-0.5 rounded ${badgeVariants[variant]} select-none ${className}`}
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

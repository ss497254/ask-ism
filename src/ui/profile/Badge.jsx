import React, { HTMLAttributes } from "react";

const badgeVariants = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-300 dark:text-blue-800",
    accent: "bg-red-100 text-accent dark:bg-red-300",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-300 dark:text-purple-800",
    green: "bg-green-100 text-green-800 dark:bg-green-300 dark:text-green-800",
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
                className={`text-xs font-bold px-2.5 py-0.5 rounded ${badgeVariants[variant]} select-none ${className}`}
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

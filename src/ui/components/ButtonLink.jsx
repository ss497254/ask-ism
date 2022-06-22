import React from "react";

export const ButtonLink = ({ children, className, ...props }) => {
    return (
        <button
            className={`text-primary-100 underline text-md ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

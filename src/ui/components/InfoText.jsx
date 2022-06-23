import React from "react";

export const InfoText = ({ className, children }) => {
    return (
        <div className={`text-gray-800 dark:text-gray-200 ${className}`}>
            {children}
        </div>
    );
};

import React from "react";

export const GridPanel = ({ children, className }) => {
    return (
        <div className={`flex flex-col flex-1 w-full ${className}`}>
            {children}
        </div>
    );
};

export const FixedGridPanel = ({ children, className }) => {
    return (
        <div
            className={`flex flex-col flex-1 sticky top-0 h-screen ${className}`}
        >
            {children}
        </div>
    );
};

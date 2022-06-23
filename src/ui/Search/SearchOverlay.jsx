import React, { forwardRef } from "react";

export const SearchOverlay = forwardRef(
    ({ children, className = "", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`absolute flex flex-col py-2 rounded-8 bg-gray-200 dark:bg-dark-700 border border-gray-300 dark:border-gray-700 shadow-xl ${className}`}
                style={{
                    minHeight: "198px",
                    maxHeight: "50vh",
                    top: "-10px",
                    left: "-10px",
                    right: "0px",
                    width: "calc(100% + 20px)",
                    zIndex: -1,
                }}
                {...props}
            >
                {children}
            </div>
        );
    }
);

SearchOverlay.displayName = "SearchOverlay";

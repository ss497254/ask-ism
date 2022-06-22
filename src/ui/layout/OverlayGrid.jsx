import React from "react";

export const OverlayGrid = ({ children, className = "", screenType }) => {
    let gridTemplateColumns = "240px 1fr 300px";

    if (screenType === "tablet-landscape") {
        gridTemplateColumns = "80px 1fr 300px";
    } else if (screenType === "tablet") {
        gridTemplateColumns = "80px 1fr";
    } else if (screenType === "mobile") {
        gridTemplateColumns = "1fr";
    }

    return (
        <div
            className={`grid w-full ${className}`}
            style={{
                gridTemplateColumns,
                maxWidth: 1500,
            }}
        >
            {children}
        </div>
    );
};

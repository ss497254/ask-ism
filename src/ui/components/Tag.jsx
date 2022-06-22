import React from "react";

export const Tag = ({ children, glow = true, className = "" }) => {
    return (
        <div
            className={`cursor-pointer bg-pink-500 hover:bg-pink-600 text-sm p-2 font-bold text-white rounded flex justify-center items-center ${
                glow ? `border` : ``
            } ${className}`}
            style={{
                height: "24px",
                // boxShadow: glow ? "0px 0px 7px var(--color-gray-500)" : "",
                border: glow ? ".5px solid var(--color-gray-900)" : "",
            }}
        >
            {children}
        </div>
    );
};

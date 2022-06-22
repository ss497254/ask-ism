import React, { useState } from "react";

export const VolumeIndicator = ({ volume = 0, bars = 24, ...props }) => {
    const hBars = [];
    for (let i = 0; i < bars; i++) {
        hBars.push(
            <div
                key={i}
                className={`h-full rounded-full w-1 transition ${
                    Math.round((volume * bars) / 100) >= i && volume > 0
                        ? "bg-primary-100"
                        : "bg-primary-700"
                }`}
            ></div>
        );
    }
    return (
        <div {...props} className="w-auto h-4 flex gap-1.5">
            {hBars}
        </div>
    );
};

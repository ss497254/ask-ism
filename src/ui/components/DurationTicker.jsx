import React, { useEffect, useState } from "react";

const pad = (s) => (s < 10 ? `0${s}` : "" + s);

export const DurationTicker = ({ dt }) => {
    const [_, rerender] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            rerender((c) => c + 1);
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, []);

    let totalSeconds = dt;

    const parts = [];
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (hours > 0) {
        parts.push(pad(hours));
    }
    parts.push(pad(minutes));
    parts.push(pad(seconds));

    return <>{parts.join(":")}</>;
};

import React from "react";
import { EmoteKeys, emoteMap } from "./EmoteData";

// emote: EmoteKeys;
// style?: React.CSSProperties;
// title?;
// alt?;
// className?;
// size?: "small";

export const Emote = ({
    emote,
    size,
    style,
    title = emote,
    alt = `:${emote}:`,
    className,
}) => {
    const src = emoteMap[emote.toLowerCase()];
    let cn = "";
    if (size === "small") {
        cn = `w-3 h-3`;
    }
    return src ? (
        <>
            <img
                style={style}
                className={`inline ${cn} ${className}`}
                alt={alt}
                title={title}
                src={src}
            />{" "}
        </>
    ) : (
        <>{":" + emote + ":"}</>
    );
};

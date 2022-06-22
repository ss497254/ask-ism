import React, { ReactElement } from "react";
import Grapheme from "grapheme-splitter";
import { parse } from "twemoji-parser";
import eRegex from "emoji-regex";

const splitter = new Grapheme();

export const ParseTextToTwemoji = ({ text, className = "", ...props }) => {
    const regex = eRegex();
    const chars = splitter.splitGraphemes(text);

    return (
        <>
            {chars.map((e, i) =>
                eRegex().test(e) ? (
                    <img
                        {...props}
                        key={i}
                        className={`emoji ${className || ""}`}
                        src={parse(e)[0].url}
                        alt={parse(e)[0].text}
                    />
                ) : (
                    <React.Fragment key={i}>{e}</React.Fragment>
                )
            )}
        </>
    );
};

const twemojiMap = {
    "📣": "1f4e3",
};

export const StaticTwemoji = ({ emoji, className = "", ...props }) => {
    return (
        <>
            <img
                {...props}
                className={`emoji ${className || ""}`}
                src={`https://twemoji.maxcdn.com/v/latest/svg/${twemojiMap[emoji]}.svg`}
            />
        </>
    );
};

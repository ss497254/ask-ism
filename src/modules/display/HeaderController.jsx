import React from "react";
import { Helmet } from "react-helmet";

export const HeaderController = ({
    title,
    description = "ask ism the official quora of IIT(ISM) Dhanbad",
    owner,
    additionalKeywords = [],
    embed,
}) => {
    return (
        <Helmet>
            <title>{title ? `${title} | ` : ""}ASK@ISM</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.png" type="image/x-icon" />
            <link rel="apple-touch-icon" href="/favicon.png"></link>
            {owner ? <meta name="author" content={owner} /> : ""}
            <meta
                name="keywords"
                content={`ASK ISM, IIT(ISM) Dhanbad${additionalKeywords?.map(
                    (k) => `, ${k}`
                )}`}
            />
            <meta name="theme-color" content={embed?.hexColor || "#F3F4F6"} />
        </Helmet>
    );
};

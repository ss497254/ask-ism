import React from "react";
import useWindowSize from "../../shared-hooks/useWindowSize";
import { TopBanner } from "../components/TopBanner";

export const MainInnerGrid = ({ children, className = "", screenType }) => {
    const { width } = useWindowSize();
    let gridTemplateColumns = "225px 1fr 310px";

    if (screenType === "xl-desktop") {
        gridTemplateColumns = "240px 750px 330px";
    } else if (screenType === "tablet-landscape") {
        gridTemplateColumns = "80px 1fr 300px";
    } else if (screenType === "tablet") {
        gridTemplateColumns = "80px 1fr";
    } else if (screenType === "mobile") {
        gridTemplateColumns = "1fr";
    }

    return (
        <>
            <TopBanner />
            <div
                id="main"
                className={`grid ${className} mx-auto ${
                    width > 1500
                        ? "gap-5"
                        : width > 1380
                        ? "gap-3 mx-5"
                        : width > 1000
                        ? "gap-2"
                        : ""
                }`}
                style={{ gridTemplateColumns, maxWidth: 1380 }}
            >
                {children}
            </div>
        </>
    );
};

export const MainGrid = ({ children, screenType }) => {
    return (
        <div className={`flex justify-center w-full h-full`}>
            <MainInnerGrid screenType={screenType}>{children}</MainInnerGrid>
        </div>
    );
};

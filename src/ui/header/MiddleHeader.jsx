import React from "react";
import { SearchBarController } from "../../modules/search/SearchBarController";
import { useScreenType } from "../../shared-hooks/useScreenType";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

export const MiddleHeader = () => {
    const screenType = useScreenType();
    return (
        <div className="flex flex-1 justify-center w-full">
            <SearchBarController />
            {screenType === "tablet" ? (
                <div className="flex px-3">
                    <RightHeader />
                </div>
            ) : null}
        </div>
    );
};

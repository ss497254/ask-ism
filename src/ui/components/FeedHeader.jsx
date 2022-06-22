import React from "react";
import { Button } from "./Button";

export const FeedHeader = ({
    actionTitle,
    onActionClicked,
    title,
    className,
}) => {
    return (
        <div className={className + " flex justify-between items-end my-4"}>
            <h4 className="text-black dark:text-white">{title}</h4>
            <Button
                transition
                onClick={onActionClicked}
                className="w-[160px] py-1"
                btn="accent"
            >
                {actionTitle}
            </Button>
        </div>
    );
};

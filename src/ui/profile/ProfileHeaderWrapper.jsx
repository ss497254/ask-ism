import React from "react";
import { useScreenType } from "../../shared-hooks/useScreenType";

export const ProfileHeaderWrapper = ({ children, coverUrl, ...props }) => {
    const screenType = useScreenType();
    return (
        <div
            className={
                (screenType === "mobile" ? "" : "rounded-8") +
                " bg-stone-100 dark:bg-dark-800 relative"
            }
            {...props}
        >
            <img
                alt="cover"
                src={coverUrl}
                className={
                    (screenType === "mobile"
                        ? "h-[150px] "
                        : "rounded-t-8 h-[180px] ") + "w-full object-cover"
                }
            />
            <div className="p-4 flex flex-col dark:text-white">{children}</div>
        </div>
    );
};

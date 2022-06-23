import React, { useState } from "react";
import { useScreenType } from "../../shared-hooks/useScreenType";

export const ProfileHeaderWrapper = ({ children, coverUrl, ...props }) => {
    const screenType = useScreenType();
    const [isError, setError] = useState(!coverUrl || coverUrl === "#");

    return (
        <div
            className={
                (screenType === "mobile" ? "" : "rounded-8 mx-2") +
                " bg-stone-100 dark:bg-dark-800 relative"
            }
            {...props}
        >
            {!isError ? (
                <img
                    alt="cover"
                    src={coverUrl}
                    onError={() => setError(true)}
                    className={
                        (screenType === "mobile"
                            ? "h-[150px] "
                            : "rounded-t-8 h-[180px] ") +
                        " bg-gray-400 dark:bg-dark-700 w-full object-cover"
                    }
                />
            ) : (
                <div
                    className={
                        (screenType === "mobile"
                            ? "h-[150px] "
                            : "rounded-t-8 h-[180px] ") +
                        " bg-gray-400 dark:bg-dark-700 w-full object-cover"
                    }
                />
            )}
            <div className="p-4 flex flex-col dark:text-white">{children}</div>
        </div>
    );
};

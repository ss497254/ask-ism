import React, { useState } from "react";
import { SolidUser } from "../../icons";

export const avatarSizeMap = {
    xxl: "140px",
    default: "80px",
    lg: "60px",
    md: "50px",
    xmd: "45px",
    sm: "40px",
    xs: "30px",
    xms: "25px",
    xxs: "20px",
};

export const SingleUser = ({
    src,
    size = "default",
    className = "",
    username,
    handleClick,
}) => {
    const [isError, setError] = useState(false);
    return (
        <div
            className={`relative inline-block ${className} cursor-pointer rounded-full overflow-hidden bg-gray-200 dark:bg-dark-700`}
            onClick={handleClick}
            style={{
                width: avatarSizeMap[size],
                height: avatarSizeMap[size],
            }}
        >
            {!isError ? (
                <img
                    alt={username ? `${username}-s-avatar` : "your-avatar"}
                    style={{
                        width: avatarSizeMap[size],
                        height: avatarSizeMap[size],
                    }}
                    className={`rounded-full w-full h-full object-cover`}
                    onError={() => setError(true)}
                    src={src}
                />
            ) : (
                <SolidUser
                    size={avatarSizeMap[size]}
                    className="text-white"
                    style={{ padding: parseInt(avatarSizeMap[size]) / 4 }}
                />
            )}
        </div>
    );
};

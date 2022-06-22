import React, { useState } from "react";

export const avatarSizeMap = {
    xxl: "140px",
    default: "80px",
    lg: "60px",
    md: "50px",
    xmd: "45px",
    sm: "40px",
    xs: "30px",
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
            className={`relative inline-block ${className} cursor-pointer`}
            onClick={handleClick}
            style={{
                width: avatarSizeMap[size],
                height: avatarSizeMap[size],
            }}
        >
            <img
                alt={username ? `${username}-s-avatar` : "your-avatar"}
                style={{
                    width: avatarSizeMap[size],
                    height: avatarSizeMap[size],
                }}
                className={`rounded-full w-full h-full object-cover`}
                onError={() => setError(true)}
                src={
                    isError
                        ? `https://ui-avatars.com/api/${
                              username ? `&name=${username}` : "&name"
                          }&rounded=true&background=B23439&bold=true&color=FFFFFF`
                        : src
                }
            />
        </div>
    );
};

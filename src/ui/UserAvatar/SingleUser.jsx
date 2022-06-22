import React, { useState } from "react";
import { SolidDeafenedOff, SolidMicrophoneOff, BotIcon } from "../../icons";
import SolidVolumeOff from "../../icons/SolidVolumeOff";

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

export const onlineIndicatorStyleMap = {
    default: {
        width: "15px",
        height: "15px",
        right: "2px",
        bottom: "-4px",
        borderWidth: "4px",
    },
    lg: {
        width: "12px",
        height: "12px",
        right: "2px",
        bottom: "-2px",
        borderWidth: "2px",
    },
    md: {
        width: "10px",
        height: "10px",
        right: "2px",
        bottom: "-2px",
        borderWidth: "2px",
    },
    xmd: {
        width: "9px",
        height: "9px",
        right: "2px",
        bottom: "-2px",
        borderWidth: "2px",
    },
    sm: {
        width: "8px",
        height: "8px",
        right: "2px",
        bottom: "-2px",
        borderWidth: "2px",
    },
    xs: {
        width: "6px",
        height: "6px",
        right: "1px",
        bottom: "-1px",
        borderWidth: "1px",
    },
    xxs: {
        width: "6px",
        height: "6px",
        right: "1px",
        bottom: "-1px",
        borderWidth: "1px",
    },
};

export const SingleUser = ({
    src,
    size = "default",
    className = "",
    isOnline = true,
    hover = true,
    muted,
    deafened,
    activeSpeaker,
    username,
    handleClick,
    isBot,
}) => {
    const [isError, setError] = useState(false);
    const sizeStyle = onlineIndicatorStyleMap[size];
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
                    boxShadow: activeSpeaker
                        ? "0 0 0 2px var(--color-accent)"
                        : "",
                    width: avatarSizeMap[size],
                    height: avatarSizeMap[size],
                }}
                className={`rounded-full w-full h-full object-cover ${
                    deafened ? "opacity-60" : ""
                }`}
                // onError={() => {
                //     console.log("avatar Url hai ", src), setError(true);
                // }}
                src={
                    isError
                        ? `https://ui-avatars.com/api/${
                              username ? `&name=${username}` : "&name"
                          }&rounded=true&background=B23439&bold=true&color=FFFFFF`
                        : src
                }
            />
            {/* {hover && (
                <div
                    className={`bg-primary-900 hover:opacity-20 transition duration-200 opacity-0 absolute w-full h-full top-0 left-0 rounded-full`}
                >
                    asdf
                </div>
            )} */}
            {/* {isOnline && (
                <span
                    className={
                        "rounded-full absolute box-content bg-accent border-primary-800"
                    }
                    style={sizeStyle}
                    data-testid="online-indictor"
                ></span>
            )} */}
            {/* {isBot && (
        <span
          className={
            "rounded-full absolute box-content bg-primary-800 border-primary-800 text-secondary items-center justify-center"
          }
          style={{ ...sizeStyle, padding: 2, top: -2 }}
          data-testid="online-indictor"
        >
          <BotIcon
            data-testid={`bot:${username}`}
            width={sizeStyle.width}
            height={sizeStyle.width}
          />
        </span>
      )} */}
            {/* {muted && (
                <span
                    className={
                        "rounded-full absolute box-content bg-primary-800 border-primary-800 text-accent items-center justify-center"
                    }
                    style={{ ...sizeStyle, padding: 2 }}
                    data-testid="online-indictor"
                >
                    <SolidMicrophoneOff
                        data-testid={`muted:${username}`}
                        width={sizeStyle.width}
                        height={sizeStyle.width}
                    />
                </span>
            )}
            {deafened && (
                <span
                    className={
                        "rounded-full absolute box-content bg-primary-800 border-primary-800 text-accent items-center justify-center"
                    }
                    style={{ ...sizeStyle, padding: 2 }}
                    data-testid="online-indictor"
                >
                    <SolidDeafenedOff
                        data-testid={`deafened:${username}`}
                        width={sizeStyle.width}
                        height={sizeStyle.width}
                    />
                </span>
            )} */}
        </div>
    );
};

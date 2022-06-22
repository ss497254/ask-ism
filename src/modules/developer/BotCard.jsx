import React from "react";
import { useRouter } from "next/router";
import { SingleUser } from "../../ui/UserAvatar";
import { Bot } from "./Bot";

export const BotCard = ({ bot }) => {
    const { push } = useRouter();

    return (
        <button
            className="flex flex-col bg-primary-800 cursor-pointer rounded-lg items-center justify-center"
            style={{ width: 140, height: 140 }}
            onClick={() =>
                push(
                    `/developer/bots/edit/[username]`,
                    `/developer/bots/edit/${bot.username}`
                )
            }
        >
            <div>
                <SingleUser
                    isOnline={true}
                    src={bot.avatarUrl}
                    username={bot.username}
                ></SingleUser>
            </div>
            <div className="font-bold text-base">{bot.displayName}</div>
        </button>
    );
};

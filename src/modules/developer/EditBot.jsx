import React, { useEffect, useState } from "react";
import { Bot } from "./Bot";
import { BotInfo } from "./BotInfo";
import { useWrappedConn } from "../../shared-hooks/useConn";
import { Button } from "../../ui/Button";
import { useRouter } from "next/router";

export const EditBot = ({}) => {
    const { query } = useRouter();
    const username = query.username;
    const [showapiKey, setShowapiKey] = useState(false);
    const [bots, setBots] = useState([]);
    const [bot, setBot] = useState();
    const wrapper = useWrappedConn();
    useEffect(() => {
        wrapper.connection.sendCall("user:get_bots", {}).then((v) => {
            setBots(v.bots);
        });
    }, []);

    useEffect(() => {
        setBot(bots.find((b) => b.username === username));
    }, [bots]);

    if (!bot) {
        return <div>{"error"}</div>;
    }
    return (
        <div
            className="flex flex-col text-primary-100"
            style={{ marginTop: 130, paddingLeft: 20, paddingRight: 20 }}
        >
            <div className="flex flex-row w-full justify-between mb-4">
                <div className="flex text-2xl font-bold">
                    {".botEdit.title"}
                </div>
            </div>
            <div className="flex flex-row w-full justify-between">
                <BotInfo bot={bot} onClick={() => {}} />

                <div
                    className="flex flex-col justify-between"
                    style={{ height: 200 }}
                >
                    <div
                        className="flex flex-col justify-between bg-primary-800 rounded-lg p-4"
                        style={{ width: 390, height: 150 }}
                    >
                        <div className="flex flex-col">
                            <div className="text-base font-bold">
                                {".botEdit.apiKey"}
                            </div>
                            <div
                                className={`flex items-center justify-start bg-primary-900 w-full rounded pl-2 ${
                                    !showapiKey
                                        ? "text-accent cursor-pointer"
                                        : ""
                                }`}
                                style={{ height: 25 }}
                                onClick={() => setShowapiKey(true)}
                            >
                                {showapiKey ? bot.apiKey : ".botEdit.reveal"}
                            </div>
                        </div>
                        <div className="flex flex-row justify-between">
                            <Button
                                color="secondary"
                                onClick={() =>
                                    navigator.clipboard?.writeText(bot.apiKey)
                                }
                            >
                                {"copy"}
                            </Button>
                            <Button
                                color="secondary"
                                onClick={() => {
                                    wrapper.connection
                                        .sendCall("user:revoke_api_key", {
                                            userId: bot.id,
                                        })
                                        .then((r) => {
                                            setBot({
                                                id: r.id,
                                                apiKey: r.apiKey,
                                                username: bot.username,
                                                displayName: bot.displayName,
                                                avatarUrl: bot.avatarUrl,
                                            });
                                        });
                                }}
                            >
                                {".botEdit.regenerate"}
                            </Button>
                        </div>
                    </div>

                    <Button disabled onClick={() => null} title="Coming Soon™">
                        {"delete"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

EditBot.ws = true;

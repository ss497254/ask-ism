import React from "react";
import { useWrappedConn } from "../../shared-hooks/useConn";
import { useCurrentAnsFromCache } from "../../shared-hooks/useCurrentAnsFromCache";
import { useUpdateQuery } from "../../shared-hooks/useUpdateQuery";
import { InfoText } from "../../ui/InfoText";
import { Input } from "../../ui/Input";
import { Modal } from "../../ui/Modal";
import { NativeSelect } from "../../ui/NativeSelect";
import { BlockedFromAnsUsers } from "./BlockedFromAnsUsers";

export const AnsSettingsModal = ({ open, onRequestClose }) => {
    const conn = useWrappedConn();
    const data = useCurrentAnsFromCache();
    const updater = useUpdateQuery();

    const options = [
        {
            label: ".modals.roomSettingsModal.chat.enabled",
            value: "default",
        },
        {
            label: ".modals.roomSettingsModal.chat.disabled",
            value: "disabled",
        },
        {
            label: ".modals.roomSettingsModal.chat.followerOnly",
            value: "follower_only",
        },
    ];

    return (
        <Modal isOpen={open} onRequestClose={onRequestClose}>
            {!data || "error" in data ? (
                <InfoText>something went wrong</InfoText>
            ) : (
                <div className={`flex flex-col w-full`}>
                    {/* require ask to speak */}
                    <label
                        className={`flex items-center my-1`}
                        htmlFor="auto-speaker"
                    >
                        <input
                            checked={!data.room.autoSpeaker}
                            onChange={(e) => {
                                const autoSpeaker = !e.target.checked;
                                updater(
                                    ["joinAnsAndGetInfo", data.room.id],
                                    (d) =>
                                        !d || "error" in d
                                            ? d
                                            : {
                                                  ...d,
                                                  room: {
                                                      ...d.room,
                                                      autoSpeaker,
                                                  },
                                              }
                                );
                                conn.mutation.roomUpdate({ autoSpeaker });
                            }}
                            id="auto-speaker"
                            type="checkbox"
                        />
                        <span className={`ml-2 text-primary-100`}>
                            {".modals.roomSettingsModal.requirePermission"}
                        </span>
                    </label>

                    <label
                        className={`items-center my-1`}
                        htmlFor="chat-cooldown"
                    >
                        <div className={`text-primary-100 mb-1`}>
                            {".modals.roomSettingsModal.chatCooldown"}
                        </div>
                        <Input
                            defaultValue={data.room.chatThrottle}
                            className={`rounded-8 bg-primary-700 h-6`}
                            onBlur={(e) => {
                                const chatThrottle = Number(e.target.value);
                                if (chatThrottle >= 0) {
                                    updater(
                                        ["joinAnsAndGetInfo", data.room.id],
                                        (d) => (!d ? d : { ...d, chatThrottle })
                                    );
                                    conn.mutation.roomUpdate({ chatThrottle });
                                }
                            }}
                            onChange={(e) => {
                                const chatThrottle = Number(e.target.value);
                                if (chatThrottle >= 0) {
                                    updater(
                                        ["joinAnsAndGetInfo", data.room.id],
                                        (d) => (!d ? d : { ...d, chatThrottle })
                                    );
                                }
                            }}
                            id="chat-cooldown"
                            type="number"
                        />
                    </label>

                    {/* chat disabled */}
                    <label className={`mt-2`} htmlFor="chat-mode">
                        <div className={`text-primary-100 mb-1`}>
                            {".modals.roomSettingsModal.chat.label"}
                        </div>
                        <NativeSelect
                            value={data.room.chatMode}
                            onChange={(e) => {
                                const chatMode = e.target.value;
                                updater(
                                    ["joinAnsAndGetInfo", data.room.id],
                                    (d) => {
                                        return !d || "error" in d
                                            ? d
                                            : {
                                                  ...d,
                                                  room: { ...d.room, chatMode },
                                              };
                                    }
                                );
                                conn.mutation.roomUpdate({ chatMode });
                            }}
                            id="chat-mode"
                        >
                            {options.map((o) => (
                                <option key={o.value} value={o.value}>
                                    {o.label}&nbsp;&nbsp;&nbsp;
                                </option>
                            ))}
                        </NativeSelect>
                    </label>
                    <BlockedFromAnsUsers />
                </div>
            )}
        </Modal>
    );
};

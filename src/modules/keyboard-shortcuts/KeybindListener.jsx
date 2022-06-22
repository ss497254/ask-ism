import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo } from "react";
import { GlobalHotKeys } from "react-hotkeys";
import {
    CHAT_KEY,
    INVITE_KEY,
    MUTE_KEY,
    DEAF_KEY,
    REQUEST_TO_SPEAK_KEY,
    useKeyMapStore,
} from "../../global-stores/useKeyMapStore";
import { useMuteStore } from "../../global-stores/useMuteStore";
import { useDeafStore } from "../../global-stores/useDeafStore";
import { modalConfirm } from "../../shared-components/ConfirmModal";
import { setMute } from "../../shared-hooks/useSetMute";
import { setDeaf } from "../../shared-hooks/useSetDeaf";
import { useAnsChatStore } from "../room/chat/useAnsChatStore";
import { AuthContext } from "../auth/AuthProvider";

export const KeybindListener = ({}) => {
    const { push } = useRouter();
    const { conn } = useContext(AuthContext);
    const { keyMap } = useKeyMapStore();
    const toggleOpen = useAnsChatStore((s) => s.toggleOpen);
    return (
        <GlobalHotKeys
            allowChanges={true}
            keyMap={keyMap}
            handlers={useMemo(() => {
                if (!conn) {
                    return {};
                }
                const wrapper = conn;
                return {
                    REQUEST_TO_SPEAK: () => {
                        modalConfirm("Would you like to ask to speak?", () => {
                            wrapper.mutation.askToSpeak();
                        });
                    },
                    MUTE: () => {
                        const { muted } = useMuteStore.getState();
                        setMute(wrapper, !muted);
                    },
                    DEAF: () => {
                        const { deafened } = useDeafStore.getState();
                        setDeaf(wrapper, !deafened);
                    },
                    INVITE: () => {
                        // wsend({ op: "fetch_invite_list", d: { cursor: 0 } });
                        // @todo
                        push("/invite");
                    },
                    PTT: (e) => {
                        if (!e) return;
                        const mute = e.type === "keyup";
                        setMute(wrapper, mute);
                    },
                    CHAT: toggleOpen,
                };
            }, [push, toggleOpen, conn])}
        />
    );
};

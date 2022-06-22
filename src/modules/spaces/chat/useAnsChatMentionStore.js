import create from "zustand";
import { combine } from "zustand/middleware";
import { useSoundEffectStore } from "../../sound-effects/useSoundEffectStore";

export const useAnsChatMentionStore = create(
    combine(
        {
            queriedUsernames: [],
            activeUsername: "",
            iAmMentioned: 0,
        },
        (set) => ({
            setQueriedUsernames: (queriedUsernames) =>
                set({
                    queriedUsernames,
                }),
            setActiveUsername: (activeUsername) => {
                return set({
                    activeUsername,
                });
            },
            resetIAmMentioned: () =>
                set({
                    iAmMentioned: 0,
                }),
            incrementIAmMentioned: () => {
                useSoundEffectStore
                    .getState()
                    .playSoundEffect("roomChatMention");
                set((x) => ({ iAmMentioned: x.iAmMentioned + 1 }));
            },
        })
    )
);

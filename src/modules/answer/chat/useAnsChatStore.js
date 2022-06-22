import create from "zustand";
import { combine } from "zustand/middleware";
import { useAnsChatMentionStore } from "./useAnsChatMentionStore";

const colors = [
    "#ff2366",
    "#fd51d9",
    "#face15",
    "#8d4de8",
    "#6859ea",
    "#7ed321",
    "#56b2ba",
    "#00CCFF",
    "#FF9900",
    "#FFFF66",
];

function generateColorFromString(str) {
    let sum = 0;
    for (let x = 0; x < str.length; x++) sum += x * str.charCodeAt(x);
    return colors[sum % colors.length];
}

export const useAnsChatStore = create(
    combine(
        {
            open: false,
            bannedUserIdMap: {},
            messages: [],
            newUnreadMessages: false,
            message: "",
            isAnsChatScrolledToTop: false,
            frozen: false,
        },
        (set) => ({
            unbanUser: (userId) =>
                set(
                    ({
                        bannedUserIdMap: { [userId]: _, ...banMap },
                        ...s
                    }) => ({
                        messages: s.messages.filter((m) => m.userId !== userId),
                        bannedUserIdMap: banMap,
                    })
                ),
            addBannedUser: (userId) =>
                set((s) => ({
                    messages: s.messages.filter((m) => m.userId !== userId),
                    bannedUserIdMap: { ...s.bannedUserIdMap, [userId]: true },
                })),
            addMessage: (m) =>
                set((s) => ({
                    newUnreadMessages: !s.open,
                    messages: [
                        { ...m, color: generateColorFromString(m.userId) },
                        ...(s.messages.length <= 100 || s.frozen
                            ? s.messages
                            : s.messages.slice(0, 100)),
                    ],
                })),
            setMessages: (messages) =>
                set((s) => ({
                    messages,
                })),
            clearChat: () =>
                set({
                    messages: [],
                    newUnreadMessages: false,
                    bannedUserIdMap: {},
                }),
            reset: () =>
                set({
                    messages: [],
                    newUnreadMessages: false,
                    message: "",
                    bannedUserIdMap: {},
                }),
            toggleOpen: () =>
                set((s) => {
                    // Reset mention state
                    useAnsChatMentionStore.getState().resetIAmMentioned();
                    if (s.open) {
                        return {
                            open: false,
                            newUnreadMessages: false,
                        };
                    } else {
                        return {
                            open: true,
                            newUnreadMessages: false,
                        };
                    }
                }),
            setMessage: (message) =>
                set({
                    message,
                }),
            setOpen: (open) => set((s) => ({ ...s, open })),
            setIsAnsChatScrolledToTop: (isAnsChatScrolledToTop) =>
                set({
                    isAnsChatScrolledToTop,
                }),
            toggleFrozen: () => set((s) => ({ frozen: !s.frozen })),
        })
    )
);

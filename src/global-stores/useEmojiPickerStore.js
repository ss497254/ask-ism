import create from "zustand";
import { combine } from "zustand/middleware";

export const useEmojiPickerStore = create(
    combine(
        {
            open: false,
            query: "",
            queryMatches: [],
            keyboardHoveredEmoji: null,
        },
        (set) => ({
            setOpen: (open) => set({ open }),
            setQuery: (query) => set({ query }),
            setQueryMatches: (queryMatches) => set({ queryMatches }),
            setKeyboardHoveredEmoji: (keyboardHoveredEmoji) =>
                set({ keyboardHoveredEmoji }),
        })
    )
);

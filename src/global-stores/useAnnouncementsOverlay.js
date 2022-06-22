import create from "zustand";
import { combine } from "zustand/middleware";

export const useAnnouncementsOverlay = create(
    combine(
        {
            isOpen: false,
        },
        (set) => ({
            set,
        })
    )
);

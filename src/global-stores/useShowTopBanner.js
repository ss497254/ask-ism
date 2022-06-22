import create from "zustand";
import { combine } from "zustand/middleware";

export const useShowTopBanner = create(
    combine(
        {
            showTopBanner: false,
        },
        (set) => ({
            set,
        })
    )
);

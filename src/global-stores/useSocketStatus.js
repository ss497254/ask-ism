import create from "zustand";
import { combine } from "zustand/middleware";

export const useSocketStatus = create(
    combine(
        {
            status: "connecting",
        },
        (set) => ({
            setStatus: (status) => set({ status }),
        })
    )
);

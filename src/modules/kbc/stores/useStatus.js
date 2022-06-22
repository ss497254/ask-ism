import create from "zustand";
import { combine } from "zustand/middleware";

export const useStatus = create(
    combine(
        {
            status: "init",
        },
        (set) => ({
            setStatus: (status) => set({ status }),
        })
    )
);

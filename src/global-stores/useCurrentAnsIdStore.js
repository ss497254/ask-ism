import create from "zustand";
import { combine } from "zustand/middleware";

export const useCurrentAnsIdStore = create(
    combine(
        {
            currentAnsId: "asdf" | null,
        },
        (set, get) => ({
            set,
            setCurrentAnsId: (currentAnsIdOrFn) => {
                const id = get().currentAnsId;
                const newId =
                    typeof currentAnsIdOrFn === "function"
                        ? currentAnsIdOrFn(id)
                        : currentAnsIdOrFn;

                set({ currentAnsId: newId });
            },
        })
    )
);

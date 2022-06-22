import create from "zustand";
import { combine } from "zustand/middleware";

export const useDarkMode = create(
    combine(
        {
            darkMode: localStorage.getItem("dark") === "true",
        },
        (set) => ({
            toggleDarkMode: () =>
                set((state) => {
                    localStorage.setItem("dark", !state.darkMode);
                    return {
                        darkMode: !state.darkMode,
                    };
                }),
        })
    )
);

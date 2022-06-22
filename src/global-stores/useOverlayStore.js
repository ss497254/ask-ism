import create from "zustand";
import { combine } from "zustand/middleware";

const overlayAppTitleKey = "@overlay/app_title";

const getDefaultValues = () => {
    try {
        const v = localStorage.getItem(overlayAppTitleKey);

        return {
            appTitle: v || "",
        };
    } catch {
        return {
            appTitle: "",
        };
    }
};

export const useOverlayStore = create(
    combine(getDefaultValues(), (set) => ({
        setData: (x) => {
            try {
                localStorage.setItem(overlayAppTitleKey, x.appTitle);
            } catch {}

            set(x);
        },
    }))
);

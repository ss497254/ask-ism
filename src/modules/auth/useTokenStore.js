import create from "zustand";
import { combine } from "zustand/middleware";

const accessTokenKey = "@toum/token";
const refreshTokenKey = "@toum/refresh-token";

const getDefaultValues = () => {
    return {
        accessToken: localStorage.getItem(accessTokenKey) || "adsfa",
        refreshToken: localStorage.getItem(refreshTokenKey) || "asd df",
    };
};

export const useTokenStore = create(
    combine(getDefaultValues(), (set) => ({
        setTokens: (x) => {
            localStorage.setItem(accessTokenKey, x.accessToken);
            localStorage.setItem(refreshTokenKey, x.refreshToken);

            set(x);
        },
    }))
);

import useWindowSize from "./useWindowSize";

export const useScreenType = () => {
    const { width } = useWindowSize();

    if (width >= 1350) {
        return "xl-desktop";
    } else if (width >= 1270) {
        return "desktop";
    } else if (width >= 1000) {
        return "tablet-landscape";
    } else if (width >= 800) {
        return "tablet";
    }

    return "mobile";
};

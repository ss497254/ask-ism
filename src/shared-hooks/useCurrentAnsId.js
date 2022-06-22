import { useRouter } from "next/router";
import { useCurrentAnsIdStore } from "../global-stores/useCurrentAnsIdStore";

export const useCurrentAnsId = () => {
    const { pathname, query } = useRouter();
    const { currentAnsId } = useCurrentAnsIdStore();
    if (pathname === "/room/[id]" && query.id && typeof query.id === "string") {
        return query.id;
    }
    return currentAnsId;
};

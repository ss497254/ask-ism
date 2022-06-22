import { useCurrentAnsId } from "./useCurrentAnsId";
import { useQuery } from "react-query";

export const useCurrentAnsFromCache = () => {
    const roomId = useCurrentAnsId();
    // this should read from the cache
    const { data } = useQuery(["joinAnsAndGetInfo", roomId].join("/"), {
        enabled: false,
    });

    return data;
};

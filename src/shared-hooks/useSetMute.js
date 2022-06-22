import { useDeafStore } from "../global-stores/useDeafStore";
import { useMuteStore } from "../global-stores/useMuteStore";
import { useWrappedConn } from "./useConn";

export const setMute = (conn, value) => {
    const { setInternalDeaf, deafened } = useDeafStore.getState();
    // auto undeafen on unmute
    if (deafened) {
        setInternalDeaf(false);
        conn.mutation.setDeaf(false);
    } else {
        useMuteStore.getState().setInternalMute(value);
        conn.mutation.setMute(value);
    }
};

export const useSetMute = () => {
    const conn = useWrappedConn();
    return (value) => {
        setMute(conn, value);
    };
};

import { useDeafStore } from "../global-stores/useDeafStore";
import { useMuteStore } from "../global-stores/useMuteStore";
import { useWrappedConn } from "./useConn";

export const setDeaf = (conn, value) => {
    const { muted, setInternalMute } = useMuteStore.getState();
    if (muted) {
        setInternalMute(false, false);
        conn.mutation.setMute(false);
    }
    useDeafStore.getState().setInternalDeaf(value);
    conn.mutation.setDeaf(value);
};

export const useSetDeaf = () => {
    const conn = useWrappedConn();
    return (value) => {
        setDeaf(conn, value);
    };
};

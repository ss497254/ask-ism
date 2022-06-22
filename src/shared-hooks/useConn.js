import { useContext } from "react";
import { AuthContext } from "../modules/auth/AuthProvider";

export const useConn = () => {
    return useContext(AuthContext).conn;
};

export const useWrappedConn = () => {
    return useContext(AuthContext).conn;
};

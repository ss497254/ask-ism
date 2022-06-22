import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useVerifyLoggedIn } from "./useVerifyLoggedIn";

export const WaitForAuth = ({ children }) => {
    const { conn } = useContext(AuthContext);
    // console.log({ conn });

    // if (!useVerifyLoggedIn()) {
    //     alert("You are not logged in");
    //     return null;
    // }

    if (!conn) {
        // alert("Please Wait");
        return <div className="flex">loading...</div>;
    }

    return <>{children}</>;
};

import React, { useEffect, useMemo, useRef, useState } from "react";

import { useTokenStore } from "./useTokenStore";
import { apiBaseUrl } from "../../lib/constants";
// import { showErrorToast } from "../../lib/showErrorToast";
import { useCurrentAnsIdStore } from "../../global-stores/useCurrentAnsIdStore";

export const AuthContext = React.createContext({
    conn: {},
    setUser: () => {},
    setConn: () => {},
});

export const AuthProvider = ({ children }) => {
    const hasTokens = useTokenStore((s) => s.accessToken && s.refreshToken);
    const [conn, setConn] = useState({
        user: {
            id: 342354,
            displayName: "Saurabh Singh",
            contributions: 5,
            bio: "bio me kya rakha hai saalo, Use these default button styles with multiple colors to indicate an action or link within your website.",
            username: "ss497254",
            staff: "GodFather",
            questions: 253,
            answers: 69,
            website: "https://ss497254.github.io",
            avatarUrl: "/img/ss497254.png",
        },
        setUser: () => {},
        setConn: () => {},
    });

    const isConnecting = useRef(false);

    useEffect(() => {
        if (!conn && hasTokens && !isConnecting.current) {
            isConnecting.current = true;
            //         raw.connect("", "", {
            //             waitToReconnect: true,
            //             url: apiBaseUrl.replace("http", "ws") + "/socket",
            //             getAuthOptions: () => {
            //                 const { accessToken, refreshToken } =
            //                     useTokenStore.getState();
            //                 const { recvTransport, sendTransport } =
            //
            //                 const reconnectToVoice = !recvTransport
            //                     ? true
            //                     : recvTransport.connectionState !== "connected" ||
            //                       sendTransport?.connectionState !== "connected";

            //                 console.log({
            //                     reconnectToVoice,
            //                     recvState: recvTransport?.connectionState,
            //                     sendState: sendTransport?.connectionState,
            //                 });

            //                 return {
            //                     accessToken,
            //                     refreshToken,
            //                     reconnectToVoice,
            //                     currentAnsId:
            //                         useCurrentAnsIdStore.getState().currentAnsId,
            //                 };
            //             },
            //             onConnectionTaken: () => {
            //                 useCurrentAnsIdStore.getState().setCurrentAnsId(null);
            //                 replace("/connection-taken");
            //             },
            //             onClearTokens: () => {
            //                 console.log("clearing tokens...");
            //                 useTokenStore
            //                     .getState()
            //                     .setTokens({ accessToken: "", refreshToken: "" });
            //                 setConn(null);
            //                 useCurrentAnsIdStore.getState().setCurrentAnsId(null);
            //                 replace("/logout");
            //             },
            //         })
            //             .then((x) => {
            //                 setConn(x);
            //                 if (x.user.currentAnsId) {
            //                     useCurrentAnsIdStore
            //                         .getState()
            //                         // if an id exists already, that means they are trying to join another room
            //                         // just let them join the other room rather than overwriting it
            //                         .setCurrentAnsId(
            //                             (id) => id || x.user.currentAnsId
            //                         );
            //                 }
            //             })
            //             .catch((err) => {
            //                 if (err.code === 4001) {
            //                     replace(`/?next=${window.location.pathname}`);
            //                 }
            //             })
            //             .finally(() => {
            //                 isConnecting.current = false;
            //             });
        }
    }, [conn, hasTokens]);

    useEffect(() => {
        if (!conn) {
            return;
        }

        // return conn.addListener(
        //     "new-tokens",
        //     ({ refreshToken, accessToken }) => {
        //         useTokenStore.getState().setTokens({
        //             accessToken,
        //             refreshToken,
        //         });
        //     }
        // );
    }, [conn]);

    return (
        <AuthContext.Provider
            value={useMemo(
                () => ({
                    conn,
                    setConn,
                    setUser: (u) => {
                        if (conn) {
                            setConn({
                                ...conn,
                                user: u,
                            });
                        }
                    },
                }),
                [conn]
            )}
        >
            {children}
        </AuthContext.Provider>
    );
};

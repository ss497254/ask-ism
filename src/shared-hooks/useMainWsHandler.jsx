import { useRouter } from "next/router";
import { FC, useContext, useEffect } from "react";
import { useCurrentAnsIdStore } from "../global-stores/useCurrentAnsIdStore";
import { useAnsChatMentionStore } from "../global-stores/useAnsChatMentionStore";
import { showErrorToast } from "../lib/showErrorToast";
import { useTokenStore } from "../modules/auth/useTokenStore";
import { AuthContext } from "../modules/auth/AuthProvider";
import { invitedToSpaceConfirm } from "../shared-components/InvitedToJoinSpaceModal";
import { setMute } from "./useSetMute";
import { useUpdateQuery } from "./useUpdateQuery";

export const useMainWsHandler = () => {
    const { push } = useRouter();
    const { conn } = useContext(AuthContext);
    const updateQuery = useUpdateQuery();

    useEffect(() => {
        if (!conn) {
            return;
        }
        const unsubs = [];

        return () => {
            unsubs.forEach((u) => u());
        };
    }, [conn, updateQuery, push]);
};

export const MainWsHandlerProvider = ({ children }) => {
    useMainWsHandler();
    return <>{children}</>;
};

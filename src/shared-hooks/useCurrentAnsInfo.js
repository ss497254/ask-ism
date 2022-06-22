import { useContext } from "react";
import { AuthContext } from "../modules/auth/AuthProvider";
import { useCurrentAnsFromCache } from "./useCurrentAnsFromCache";

let roomModData = {};

export const useCurrentAnsInfo = () => {
    const data = useCurrentAnsFromCache();
    const { conn } = useContext(AuthContext);

    if (!data || !conn || "error" in data) {
        return {
            isMod: false,
            isCreator: false,
            isSpeaker: false,
            canSpeak: false,
        };
    }

    let isMod = false;
    let isSpeaker = false;
    let canIAskToSpeak = false;
    const me = conn.user;
    const isCreator = me.id === data.room.creatorId;

    const { users } = data;

    for (const u of users) {
        if (u.id === me.id) {
            if (u.roomPermissions?.isSpeaker) {
                isSpeaker = true;
            }
            if (u.roomPermissions?.isMod) {
                isMod = true;
            }
            canIAskToSpeak =
                !u.roomPermissions?.askedToSpeak && !isCreator && !isSpeaker;
            break;
        }
    }

    return {
        isCreator,
        isMod,
        isSpeaker,
        canIAskToSpeak,
        canSpeak: isCreator || isSpeaker,
    };
};

import React, { useMemo } from "react";
import { useCurrentAnsIdStore } from "../../../global-stores/useCurrentAnsIdStore";
import { AnsChatInput } from "./AnsChatInput";
import { AnsChatList } from "./AnsChatList";
import { AnsChatMentions } from "./AnsChatMentions";

export const AnsChat = ({ users, room }) => {
    const userMap = useMemo(() => {
        const map = {};
        users.forEach((u) => {
            map[u.id] = u;
        });
        return map;
    }, [users]);

    const { currentAnsId } = useCurrentAnsIdStore();

    return (
        <div
            className={`flex flex-1 w-full md:mb-3 overflow-y-auto bg-primary-900 md:bg-primary-800 h-full rounded-8`}
        >
            <div className={`flex flex-1 w-full flex-col md:mt-4`}>
                <AnsChatList room={room} userMap={userMap} />
                <AnsChatMentions users={users} />
                <AnsChatInput users={users} />
            </div>
        </div>
    );
};

import React from "react";
import { useCurrentAnsFromCache } from "../../shared-hooks/useCurrentAnsFromCache";
import { AnsChat } from "./chat/AnsChat";

export const AnsChatController = ({}) => {
    const data = useCurrentAnsFromCache();

    if (!data || "error" in data) {
        return null;
    }

    return <AnsChat {...data} />;
};

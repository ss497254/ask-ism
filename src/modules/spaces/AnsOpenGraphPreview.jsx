import React from "react";
import { isServer } from "../../lib/isServer";
import { HeaderController } from "../display/HeaderController";

export const AnsOpenGraphPreview = ({ room, children }) => {
    if (isServer && room) {
        const { name, description } = room;
        return (
            <HeaderController
                title={name}
                description={description}
                embed={{}}
            />
        );
    }

    return <>{children}</>;
};

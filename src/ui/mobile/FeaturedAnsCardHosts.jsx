import React from "react";
import { FeaturedAnsCardAvatars } from "./FeaturedAnsCardAvatars";

export const FeaturedAnsCardHosts = ({ avatars, names }) => {
    return (
        <div className="flex flex-row align-middle">
            <FeaturedAnsCardAvatars avatars={avatars} />
            <div className="flex flex-col pl-4 justify-center">
                <p className="text-primary-300">Hosted by</p>
                <p className="text-primary-100">{names.join(", ")}</p>
            </div>
        </div>
    );
};

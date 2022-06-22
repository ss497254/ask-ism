import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTypeSafePrefetch } from "../shared-hooks/useTypeSafePrefetch";

const handlers = {
    following: ({ username }) => ({
        href: "/u/[username]/following",
        as: `/u/${username}/following`,
        onClick: (prefetch) => prefetch("getFollowList", [username, true, 0]),
    }),
    followers: ({ username }) => ({
        href: "/u/[username]/followers",
        as: `/u/${username}/followers`,
        onClick: (prefetch) => prefetch("getFollowList", [username, false, 0]),
    }),
    profile: ({ username }) => ({
        href: "/u/[username]",
        as: `/u/${username}`,
        onClick: (prefetch) => prefetch("getUserProfile", [username]),
    }),
    room: ({ id }) => ({
        href: "/room/[id]",
        as: `/room/${id}`,
        onClick: (prefetch) => prefetch("joinAnsAndGetInfo", [id]),
    }),
};

// the purpose of this component is to start the query to the api before navigating to the page
// this will result in less loading time for the user
export const ApiPreloadLink = ({ children, route, data, ...props }) => {
    const prefetch = useTypeSafePrefetch();

    const { as, href, onClick } = handlers[route](data);

    return (
        <Link href={href} as={as}>
            <a {...props} onClick={() => onClick(prefetch)}>
                {children}
            </a>
        </Link>
    );
};

export const usePreloadPush = () => {
    const { push } = useRouter();
    const prefetch = useTypeSafePrefetch();
    return ({ route, data }) => {
        const { as, href, onClick } = handlers[route](data);
        onClick(prefetch);
        push(href, as);
    };
};

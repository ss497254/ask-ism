import React, { useState } from "react";
import { useConn } from "../../shared-hooks/useConn";
import { useQuery } from "react-query";
import {
    FollowerOnline,
    FollowersOnlineShowMore,
    FollowersOnlineWrapper,
} from "../../ui/FollowersOnline";

import { InfoText } from "../../ui/InfoText";

const Page = ({ cursor, isLastPage, isOnlyPage, onLoadMore }) => {
    const { data, isLoading } = useQuery(["getMyFollowing", cursor].join("/"), {
        refetchOnMount: "always",
    });

    if (isOnlyPage && !isLoading && !data?.users.length) {
        return <InfoText>{"No Online"}</InfoText>;
    }

    return (
        <>
            {data?.users.map((u) => (
                <FollowerOnline {...u} key={u.id} />
            ))}
            {isLastPage && data?.nextCursor ? (
                <FollowersOnlineShowMore
                    onClick={() => onLoadMore(data.nextCursor)}
                />
            ) : null}
        </>
    );
};

export const FollowingOnlineController = ({}) => {
    const [cursors, setCursors] = useState([0, 1]);
    const conn = useConn();

    if (!conn) {
        return null;
    }

    return (
        <FollowersOnlineWrapper>
            {cursors.map((c, i) => (
                <Page
                    key={c}
                    cursor={c}
                    onLoadMore={(nc) => setCursors([...cursors, nc])}
                    isLastPage={i === cursors.length - 1}
                    isOnlyPage={cursors.length === 1}
                />
            ))}
        </FollowersOnlineWrapper>
    );
};

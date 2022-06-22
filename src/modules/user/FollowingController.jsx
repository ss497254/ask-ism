import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { SolidFriends } from "../../icons";
import { isServer } from "../../lib/isServer";
import { ApiPreloadLink } from "../../shared-components/ApiPreloadLink";
import { useConn } from "../../shared-hooks/useConn";
import { useIntersectionObserver } from "../../shared-hooks/useIntersectionObserver";
import { useTypeSafeMutation } from "../../shared-hooks/useTypeSafeMutation";
import { useQuery } from "react-query";
import { useUpdateQuery } from "../../shared-hooks/useUpdateQuery";
import { Button } from "../../ui/Button";
import { CenterLoader } from "../../ui/CenterLoader";
import { Spinner } from "../../ui/Spinner";
import { SingleUser } from "../../ui/UserAvatar";
import { MiddlePanel } from "../layouts/GridPanels";

const Page = ({ cursor, isLastPage, onLoadMore, username, isFollowing }) => {
    const conn = useConn();
    const { setNode, entry } = useIntersectionObserver({});
    const {
        mutateAsync,
        isLoading: followLoading,
        variables,
    } = useTypeSafeMutation("follow");

    const updater = useUpdateQuery();
    const vars = [username, isFollowing, cursor];
    let { data, isLoading } = useQuery(["getFollowList", ...vars].join("/"), {
        enabled: !!username && !isServer,
        staleTime: Infinity,
        refetchOnMount: "always",
    });

    const [shouldLoadMore, setShouldLoadMore] = useState(false);

    useEffect(() => {
        setShouldLoadMore(!!entry?.isIntersecting);
    }, [entry?.isIntersecting]);

    useEffect(() => {
        if (shouldLoadMore && data?.nextCursor) {
            onLoadMore(data.nextCursor);
            setShouldLoadMore(false);
        }
    }, [data?.nextCursor, entry?.isIntersecting, onLoadMore, shouldLoadMore]);

    if (isLoading) {
        return <CenterLoader />;
    } else {
        data = [
            {
                user: {
                    displayName: "Pandey Singh",
                    bio: "bio me kya rakha hai saalo",
                    username: "asdfasdfasd",
                    isOnline: true,
                    avatarUrl: "/favicon.ico",
                },
            },
            {
                user: {
                    displayName: "gupta Singh",
                    bio: "bio me kya rakha hai saalo",
                    username: "asga df",
                    isOnline: false,
                    avatarUrl: "/favicon.ico",
                },
            },
        ];
    }

    if (!data || data.users.length === 0) {
        const styles = "text-primary-200 text-center";
        if (isFollowing)
            return <div className={styles}>{"Following None"}</div>;
        else return <div className={styles}>{"No Followers"}</div>;
    }

    return (
        <>
            {data.users.map((user) => (
                <div key={user.id} className="flex items-center mb-6">
                    <div className="flex">
                        <SingleUser size="md" src={user.avatarUrl} />
                    </div>
                    <div className="flex px-4 flex-1">
                        <ApiPreloadLink
                            route="profile"
                            data={{ username: user.username }}
                        >
                            <div className="flex flex-col w-full">
                                <div className="block max-w-md text-primary-100 truncate w-full">
                                    {user.displayName}
                                </div>
                                <div className="flex text-primary-200">
                                    @{user.username}
                                </div>
                            </div>
                        </ApiPreloadLink>
                    </div>
                    <div className="flex">
                        {conn.user.username !== user.username && (
                            <Button
                                loading={
                                    followLoading && variables?.[0] === user.id
                                }
                                onClick={async () => {
                                    await mutateAsync([
                                        user.id,
                                        !user.youAreFollowing,
                                    ]);
                                    updater(["getFollowList", ...vars], (x) =>
                                        !x
                                            ? x
                                            : {
                                                  ...x,
                                                  users: x.users.map((u) =>
                                                      u.id === user.id
                                                          ? {
                                                                ...u,
                                                                numFollowers:
                                                                    u.numFollowers +
                                                                    (user.youAreFollowing
                                                                        ? -1
                                                                        : 1),
                                                                youAreFollowing:
                                                                    !user.youAreFollowing,
                                                            }
                                                          : u
                                                  ),
                                              }
                                    );
                                }}
                                size="small"
                                color={
                                    user.youAreFollowing
                                        ? "secondary"
                                        : "primary"
                                }
                                icon={
                                    user.youAreFollowing ? null : (
                                        <SolidFriends />
                                    )
                                }
                            >
                                {user.youAreFollowing
                                    ? "unfollow"
                                    : "followHim"}
                            </Button>
                        )}
                    </div>
                </div>
            ))}
            {isLastPage && data.nextCursor && (
                <div ref={setNode} className={`flex justify-center py-5`}>
                    <Spinner />
                </div>
            )}
        </>
    );
};

export const FollowingController = ({}) => {
    const { pathname, query } = useRouter();
    const isFollowing = pathname.includes("/following");
    const username = typeof query.username === "string" ? query.username : "";
    const [cursors, setCursors] = useState([0, 1]);

    return (
        <MiddlePanel>
            <div className="flex flex-col mb-6">
                {cursors.map((cursor, i) => (
                    <Page
                        username={username}
                        isFollowing={isFollowing}
                        key={cursor}
                        cursor={cursor}
                        isOnlyPage={cursors.length === 1}
                        onLoadMore={(c) => setCursors([...cursors, c])}
                        isLastPage={i === cursors.length - 1}
                    />
                ))}
            </div>
        </MiddlePanel>
    );
};

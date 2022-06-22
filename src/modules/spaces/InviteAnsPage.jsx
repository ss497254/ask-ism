import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useCurrentAnsIdStore } from "../../global-stores/useCurrentAnsIdStore";
import { SolidFriends } from "../../icons";
import { isServer } from "../../lib/isServer";
import { ApiPreloadLink } from "../../shared-components/ApiPreloadLink";
import { useWrappedConn } from "../../shared-hooks/useConn";
import { useTypeSafePrefetch } from "../../shared-hooks/useTypeSafePrefetch";
import { useQuery } from "react-query";
import { Button } from "../../ui/Button";
import { CenterLoader } from "../../ui/CenterLoader";
import { InfoText } from "../../ui/InfoText";
import { Input } from "../../ui/Input";
import { AnsCard } from "../../ui/AnsCard";
import { SingleUser } from "../../ui/UserAvatar";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";
import { MiddlePanel } from "../layouts/GridPanels";
import { useGetAnsByQueryParam } from "./useGetAnsByQueryParam";
import { HeaderController } from "../display/HeaderController";
import { FeedHeader } from "../../ui/FeedHeader";

const InviteButton = ({ onClick }) => {
    const [invited, setInvited] = useState(false);
    return (
        <Button
            size="small"
            disabled={invited}
            onClick={() => {
                onClick();
                setInvited(true);
            }}
        >
            {invited ? ".inviteButton.invited" : ".inviteButton.inviteToAns"}
        </Button>
    );
};

const Page = ({ cursor, isLastPage, onLoadMore }) => {
    const conn = useWrappedConn();
    const { isLoading, data } = useQuery(["getInviteList", cursor].join("/"), {
        staleTime: Infinity,
        enabled: !isServer,
        refetchOnMount: "always",
    });

    if (isLoading) {
        return <CenterLoader />;
    }

    if (!data) {
        return null;
    }

    return (
        <>
            <HeaderController embed={{}} title="Invite" />
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
                            <div className="flex flex-col">
                                <div className="flex text-primary-100">
                                    {user.displayName}
                                </div>
                                <div className="flex text-primary-200">
                                    @{user.username}
                                </div>
                            </div>
                        </ApiPreloadLink>
                    </div>
                    <div className="block">
                        <InviteButton
                            onClick={() => {
                                conn.mutation.inviteToAns(user.id);
                            }}
                        />
                    </div>
                </div>
            ))}
            {isLastPage && data.nextCursor ? (
                <div className={`flex justify-center py-5`}>
                    <Button
                        size="small"
                        onClick={() => {
                            onLoadMore(data.nextCursor);
                        }}
                    >
                        {"loadMore"}
                    </Button>
                </div>
            ) : null}
        </>
    );
};

export const InviteAnsPage = ({}) => {
    const { data, isLoading } = useGetAnsByQueryParam();
    const inputRef = useRef < HTMLInputElement > null;
    const [copied, setCopied] = useState(false);
    const [cursors, setCursors] = useState([0]);

    if (isLoading || !data || "error" in data) {
        return (
            <DefaultDesktopLayout>
                <MiddlePanel>
                    <CenterLoader />
                </MiddlePanel>
            </DefaultDesktopLayout>
        );
    }

    const { room } = data;
    const url = window.location.origin + `/room/${room.id}`;

    let buttonText = "copy";

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (navigator.share) {
        buttonText = "share link to room";
    } else if (copied) {
        buttonText = "copied";
    }

    return (
        <DefaultDesktopLayout>
            <MiddlePanel>
                <>
                    {!navigator.share ? (
                        <div
                            className={`flex text-primary-100 font-bold text-2xl mb-2`}
                        >
                            {".inviteList.shareAnsLink"}
                        </div>
                    ) : null}
                    <div data-testid="container" className={`mb-8 flex`}>
                        <Input
                            readOnly
                            ref={inputRef}
                            value={url}
                            className="mr-2"
                        />
                        <Button
                            size="small"
                            onClick={() => {
                                if (navigator.share) {
                                    navigator.share({ url });
                                } else {
                                    inputRef.current?.select();
                                    document.execCommand("copy");
                                    setCopied(true);
                                }
                            }}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </>
                {cursors.map((cursor, i) => (
                    <Page
                        key={cursor}
                        cursor={cursor}
                        isOnlyPage={cursors.length === 1}
                        onLoadMore={(c) => setCursors([...cursors, c])}
                        isLastPage={i === cursors.length - 1}
                    />
                ))}
            </MiddlePanel>
        </DefaultDesktopLayout>
    );
};

InviteAnsPage.ws = true;

import React from "react";
// import { useDeafStore } from "../../global-stores/useDeafStore";
// import { useMuteStore } from "../../global-stores/useMuteStore";
// import { useCurrentAnsFromCache } from "../../shared-hooks/useCurrentAnsFromCache";
// import { useCurrentAnsInfo } from "../../shared-hooks/useCurrentAnsInfo";
// import { useSetDeaf } from "../../shared-hooks/useSetDeaf";
// import { useSetMute } from "../../shared-hooks/useSetMute";
import { MinimizedAnsCard } from "../../ui/components/MinimizedAnsCard";

export const MinimizedAnsCardController = ({}) => {
    // const data = useCurrentAnsFromCache();
    // const { canSpeak } = useCurrentAnsInfo();
    // const { muted } = useMuteStore();
    // const { deafened } = useDeafStore();
    // const setMute = useSetMute();
    // const setDeaf = useSetDeaf();

    // const { room } = data;
    // const dt = new Date(room.inserted_at);

    return (
        <MinimizedAnsCard
            onFullscreenClick={() => {}}
            // leaveLoading={}
            room={{
                // name: room.name,
                // speakers: room.peoplePreviewList
                //     .slice(0, 3)
                //     .map((s) => s.displayName),
                // roomStartedAt: dt,
                // myself: {
                //     isDeafened: deafened,
                //     isSpeaker: canSpeak,
                //     isMuted: muted,
                //     leave: () => {},
                //     switchDeafened: () => {
                //         setDeaf(!deafened);
                //     },
                //     switchMuted: () => {
                //         setMute(!muted);
                //     },
                // },
                a: "a",
            }}
        />
    );
};

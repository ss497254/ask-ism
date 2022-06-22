import hark from "hark";
import React, { useContext, useEffect } from "react";
import { useCurrentAnsIdStore } from "../../../global-stores/useCurrentAnsIdStore";
import { useDebugAudioStore } from "../../../global-stores/useDebugAudio";
import { useConn } from "../../../shared-hooks/useConn";
import { AuthContext } from "../../auth/AuthProvider";
import { useVoiceStore } from "../stores/useVoiceStore";

export const ActiveSpeakerListener = ({}) => {
    const { conn } = useContext(AuthContext);
    const { micStream } = useVoiceStore();
    const { currentAnsId } = useCurrentAnsIdStore();
    useEffect(() => {
        if (!currentAnsId || !micStream || !conn) {
            return;
        }

        const wrappedConn = conn;

        const harker = hark(micStream, { threshold: -65, interval: 75 });

        harker.on("speaking", () => {
            wrappedConn.mutation.speakingChange(true);
        });

        harker.on("stopped_speaking", () => {
            wrappedConn.mutation.speakingChange(false);
        });

        return () => {
            harker.stop();
        };
    }, [micStream, currentAnsId, conn]);

    return null;
};

import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef } from "react";
import { useCurrentAnsIdStore } from "../../global-stores/useCurrentAnsIdStore";
import { useMuteStore } from "../../global-stores/useMuteStore";
import { useDeafStore } from "../../global-stores/useDeafStore";
import { AuthContext } from "../auth/AuthProvider";
import { ActiveSpeakerListener } from "./components/ActiveSpeakerListener";
import { AudioRender } from "./components/AudioRender";
import { useMicIdStore } from "./stores/useMicIdStore";
import { useVoiceStore } from "./stores/useVoiceStore";
import { consumeAudio } from "./utils/consumeAudio";
import { createTransport } from "./utils/createTransport";
import { joinAns } from "./utils/joinAns";
import { receiveVoice } from "./utils/receiveVoice";
import { sendVoice } from "./utils/sendVoice";

export function closeVoiceConnections(_roomId) {
    const { roomId, mic, nullify } = useVoiceStore.getState();
    if (_roomId === null || _roomId === roomId) {
        if (mic) {
            console.log("stopping mic");
            mic.stop();
        }

        console.log("nulling transports");
        nullify();
    }
}

export const WebRtcApp = () => {
    const { conn } = useContext(AuthContext);
    const { mic } = useVoiceStore();
    const { micId } = useMicIdStore();
    const { muted } = useMuteStore();
    const { deafened } = useDeafStore();
    const { setCurrentAnsId } = useCurrentAnsIdStore();
    const initialLoad = useRef(true);
    const { push } = useRouter();

    useEffect(() => {
        if (micId && !initialLoad.current) {
            sendVoice();
        }
        initialLoad.current = false;
    }, [micId]);
    const consumerQueue = useRef([]);

    function flushConsumerQueue(_roomId) {
        try {
            for (const {
                roomId,
                d: { peerId, consumerParameters },
            } of consumerQueue.current) {
                if (_roomId === roomId) {
                    consumeAudio(consumerParameters, peerId);
                }
            }
        } catch (err) {
            console.log(err);
        } finally {
            consumerQueue.current = [];
        }
    }
    useEffect(() => {
        if (mic) {
            mic.enabled = !muted && !deafened;
        }
    }, [mic, muted, deafened]);
    useEffect(() => {
        if (!conn) {
            return;
        }

        const unsubs = [
            // conn.addListener("you_left_room", (d) => {
            //     if (d.kicked) {
            //         const { currentAnsId } = useCurrentAnsIdStore.getState();
            //         if (currentAnsId !== d.roomId) {
            //             return;
            //         }
            //         setCurrentAnsId(null);
            //         closeVoiceConnections(d.roomId);
            //         push("/");
            //     }
            // }),
            // conn.addListener("new-peer-speaker", async (d) => {
            //     const { roomId, recvTransport } = useVoiceStore.getState();
            //     if (recvTransport && roomId === d.roomId) {
            //         await consumeAudio(d.consumerParameters, d.peerId);
            //     } else {
            //         consumerQueue.current = [
            //             ...consumerQueue.current,
            //             { roomId, d },
            //         ];
            //     }
            // }),
            // conn.addListener("you-are-now-a-speaker", async (d) => {
            //     if (d.roomId !== useVoiceStore.getState().roomId) {
            //         return;
            //     }
            //     // setStatus("connected-speaker");
            //     try {
            //         await createTransport(
            //             conn,
            //             d.roomId,
            //             "send",
            //             d.sendTransportOptions
            //         );
            //     } catch (err) {
            //         console.log(err);
            //         return;
            //     }
            //     console.log("sending voice");
            //     try {
            //         await sendVoice();
            //     } catch (err) {
            //         console.log(err);
            //     }
            // }),
            // conn.addListener("you-joined-as-peer", async (d) => {
            //     closeVoiceConnections(null);
            //     useVoiceStore.getState().set({ roomId: d.roomId });
            //     // setStatus("connected-listener");
            //     consumerQueue.current = [];
            //     console.log("creating a device");
            //     try {
            //         await joinAns(d.routerRtpCapabilities);
            //     } catch (err) {
            //         console.log("error creating a device | ", err);
            //         return;
            //     }
            //     try {
            //         await createTransport(
            //             conn,
            //             d.roomId,
            //             "recv",
            //             d.recvTransportOptions
            //         );
            //     } catch (err) {
            //         console.log("error creating recv transport | ", err);
            //         return;
            //     }
            //     receiveVoice(conn, () => flushConsumerQueue(d.roomId));
            // }),
            // conn.addListener("you-joined-as-speaker", async (d) => {
            //     closeVoiceConnections(null);
            //     useVoiceStore.getState().set({ roomId: d.roomId });
            //     // setStatus("connected-speaker");
            //     consumerQueue.current = [];
            //     console.log("creating a device");
            //     try {
            //         await joinAns(d.routerRtpCapabilities);
            //     } catch (err) {
            //         console.log("error creating a device | ", err);
            //         return;
            //     }
            //     try {
            //         await createTransport(
            //             conn,
            //             d.roomId,
            //             "send",
            //             d.sendTransportOptions
            //         );
            //     } catch (err) {
            //         console.log("error creating send transport | ", err);
            //         return;
            //     }
            //     console.log("sending voice");
            //     try {
            //         await sendVoice();
            //     } catch (err) {
            //         console.log("error sending voice | ", err);
            //         return;
            //     }
            //     await createTransport(
            //         conn,
            //         d.roomId,
            //         "recv",
            //         d.recvTransportOptions
            //     );
            //     receiveVoice(conn, () => flushConsumerQueue(d.roomId));
            // }),
        ];

        return () => {
            unsubs.forEach((x) => x());
        };
    }, [conn, push, setCurrentAnsId]);

    return (
        <>
            <AudioRender />
            <ActiveSpeakerListener />
        </>
    );
};

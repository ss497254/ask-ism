import { useVoiceStore } from "../stores/useVoiceStore";
import { consumeAudio } from "./consumeAudio";

export const receiveVoice = (conn, flushQueue) => {
    conn.once("@get-recv-tracks-done", (params) => {
        try {
            for (const {
                peerId,
                consumerParameters,
            } of params.consumerParametersArr) {
                consumeAudio(consumerParameters, peerId);
            }
        } catch (err) {
            console.log(err);
        } finally {
            flushQueue();
        }
    });
    conn.send("@get-recv-tracks", {
        rtpCapabilities: useVoiceStore.getState().device.rtpCapabilities,
    });
};

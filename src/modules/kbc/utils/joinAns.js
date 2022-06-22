import { useVoiceStore } from "../stores/useVoiceStore";

export const joinAns = async (routerRtpCapabilities) => {
    const { device } = useVoiceStore.getState();
    if (!device.loaded) {
        await device.load({ routerRtpCapabilities });
    }
};

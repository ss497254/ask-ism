import React, { useEffect } from "react";
import { useGlobalVolumeStore } from "../../global-stores/useGlobalVolumeStore";

import { Button } from "../../ui/Button";
import { NativeSelect } from "../../ui/NativeSelect";
import { VolumeSlider } from "../../ui/VolumeSlider";
import {
    MuteKeybind,
    DeafKeybind,
    PTTKeybind,
    ChatKeybind,
    InviteKeybind,
    RequestToSpeakKeybind,
} from "../keyboard-shortcuts";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";
import { MiddlePanel } from "../layouts/GridPanels";
import { HeaderController } from "../display/HeaderController";
import { useDevices } from "../../shared-hooks/useDevices";

export const VoiceSettingsPage = () => {
    const { volume, set } = useGlobalVolumeStore();
    const { devices, fetchMics } = useDevices();

    return (
        <DefaultDesktopLayout>
            <HeaderController embed={{}} title={"title"} />
            <MiddlePanel>
                <div className="flex flex-col text-primary-100">
                    <div className={`flex mb-2`}>{"mic"} </div>
                    {devices.length ? (
                        <NativeSelect className={`mb-4`}>
                            {devices.map(({ id, label }) => (
                                <option key={id} value={id}>
                                    {label}
                                </option>
                            ))}
                        </NativeSelect>
                    ) : (
                        <div className={`flex mb-4`}>{"permissionError"}</div>
                    )}
                    <div className="flex">
                        <Button
                            size="small"
                            onClick={() => {
                                fetchMics();
                            }}
                        >
                            {"refresh"}
                        </Button>
                    </div>
                    <div className={`flex mt-8 mb-2`}>{"volume"} </div>
                    <div className={`flex mb-8`}>
                        <VolumeSlider
                            volume={volume}
                            onVolume={(n) => set({ volume: n })}
                        />
                    </div>
                    <MuteKeybind className={`mb-4`} />
                    <DeafKeybind className={`mb-4`} />
                    <PTTKeybind className={`mb-4`} />
                    <ChatKeybind className={`mb-4`} />
                    <InviteKeybind className={`mb-4`} />
                    <RequestToSpeakKeybind />
                </div>
            </MiddlePanel>
        </DefaultDesktopLayout>
    );
};

VoiceSettingsPage.ws = true;

import React, { useEffect } from "react";
import { Button } from "../../ui/Button";
import { InfoText } from "../../ui/InfoText";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";
import { MiddlePanel } from "../layouts/GridPanels";
import {
    useSoundEffectStore,
    PossibleSoundEffect,
} from "../sound-effects/useSoundEffectStore";
import { HeaderController } from "../display/HeaderController";

const capitalize = (s) => (s.length ? s[0].toUpperCase() + s.slice(1) : s);
const camelToReg = (str) => str.replace(/[A-Z]/g, (letter) => ` ${letter}`);

export const SoundEffectSettings = () => {
    const [soundEffectSettings, setSetting, playSoundEffect] =
        useSoundEffectStore((x) => [
            x.settings,
            x.setSetting,
            x.playSoundEffect,
        ]);

    return (
        <DefaultDesktopLayout>
            <HeaderController embed={{}} title={"title"} />
            <MiddlePanel>
                <h1 className={`pb-4 text-4xl text-primary-100`}>{"header"}</h1>

                {Object.keys(soundEffectSettings).map((k) => {
                    return (
                        <div className={`flex mb-4 items-center`} key={k}>
                            <InfoText>{capitalize(camelToReg(k))}</InfoText>
                            <input
                                className="ml-2"
                                type="checkbox"
                                checked={soundEffectSettings[k]}
                                onChange={() =>
                                    setSetting(k, !soundEffectSettings[k])
                                }
                            />
                            <Button
                                size="small"
                                onClick={() => playSoundEffect(k, true)}
                                className={`ml-4`}
                            >
                                {"playSound"}
                            </Button>
                        </div>
                    );
                })}
            </MiddlePanel>
        </DefaultDesktopLayout>
    );
};

SoundEffectSettings.ws = true;

import React, { createContext } from "react";
import { soundEffects, useSoundEffectStore } from "./useSoundEffectStore";

const soundKeys = Object.keys(soundEffects);

export const SoundEffectContext = createContext({ playSoundEffect: () => {} });

export const SoundEffectPlayer = ({}) => {
    const add = useSoundEffectStore((x) => x.add);

    return (
        <>
            {soundKeys.map((key) => (
                <audio
                    preload="none"
                    controls={false}
                    key={key}
                    ref={(ref) => {
                        if (ref) {
                            ref.volume = 0.7;
                            add(key, ref);
                        }
                    }}
                    src={`/sound-effects/${soundEffects[key]}`}
                />
            ))}
        </>
    );
};

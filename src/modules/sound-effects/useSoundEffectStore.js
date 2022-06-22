import create from "zustand";
import { combine } from "zustand/middleware";

export const soundEffects = {
    roomChatMention: "roomChatMention.wav",
    unmute: "unmute.wav",
    mute: "mute.wav",
    roomInvite: "roomInvite.wav",
    deafen: "deafen.wav",
    undeafen: "undeafen.wav",
};

const keyToLocalStorageKey = (s) => `@sound-effect/${s}`;

function getInitialSettings() {
    const soundEffectSettings = {
        roomChatMention: true,
        unmute: true,
        mute: true,
        roomInvite: true,
        deafen: true,
        undeafen: true,
    };

    try {
        Object.keys(soundEffects).forEach((key) => {
            const v = localStorage.getItem(keyToLocalStorageKey(key)) || "";
            soundEffectSettings[key] = !v || v === "true";
        });
    } catch {}

    return soundEffectSettings;
}

export const useSoundEffectStore = create(
    combine(
        {
            audioRefMap: {},
            settings: getInitialSettings(),
        },
        (set, get) => ({
            setSetting: (key, value) => {
                try {
                    localStorage.setItem(
                        keyToLocalStorageKey(key),
                        value.toString()
                    );
                } catch {}
                set((x) => ({
                    settings: { ...x.settings, [key]: value },
                }));
            },
            playSoundEffect: (se, force = false) => {
                const { audioRefMap, settings } = get();
                if (force || settings[se]) {
                    audioRefMap[se]?.play();
                }
            },
            add: (key, audio) =>
                set((s) => ({
                    audioRefMap: { ...s.audioRefMap, [key]: audio },
                })),
        })
    )
);

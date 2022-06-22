import React, { useEffect, useState } from "react";
import { recordKeyCombination } from "react-hotkeys";
import { useKeyMapStore } from "../../global-stores/useKeyMapStore";
import { Button } from "../../ui/Button";

export const RequestToSpeakKeybind = ({ className }) => {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);
    const {
        keyNames: { REQUEST_TO_SPEAK },
        setRequestToSpeakKeybind,
    } = useKeyMapStore();
    useEffect(() => {
        if (count > 0) {
            const unsub = recordKeyCombination(({ id }) => {
                setActive(false);
                setRequestToSpeakKeybind(id);
            });

            return () => unsub();
        }
    }, [count, setRequestToSpeakKeybind]);

    return (
        <div className={`flex items-center ${className}`}>
            <Button
                size="small"
                onClick={() => {
                    setCount((c) => c + 1);
                    setActive(true);
                }}
            >
                {".keyboardShortcuts.setKeybind"}
            </Button>
            <div className={`flex ml-4`}>
                request to speak keybind:{" "}
                <span className={`font-bold text-lg`}>
                    {active ? "listening" : REQUEST_TO_SPEAK}
                </span>
            </div>
        </div>
    );
};

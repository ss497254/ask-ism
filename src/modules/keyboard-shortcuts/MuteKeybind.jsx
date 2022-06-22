import React, { useEffect, useState } from "react";
import { recordKeyCombination } from "react-hotkeys";
import { useKeyMapStore } from "../../global-stores/useKeyMapStore";
import { Button } from "../../ui/Button";

export const MuteKeybind = ({ className }) => {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);
    const {
        keyNames: { MUTE },
        setMuteKeybind,
    } = useKeyMapStore();
    useEffect(() => {
        if (count > 0) {
            const unsub = recordKeyCombination(({ id }) => {
                setActive(false);
                setMuteKeybind(id);
            });

            return () => unsub();
        }
    }, [count, setMuteKeybind]);

    return (
        <div className={`flex items-center ${className}`}>
            <Button
                size="small"
                onClick={() => {
                    setCount((c) => c + 1);
                    setActive(true);
                }}
            >
                {"setKeybind"}
            </Button>
            <div className={`flex ml-4`}>
                {"toggleMuteKeybind"}:{" "}
                <span className={`font-bold text-lg`}>
                    {active ? "listening" : MUTE}
                </span>
            </div>
        </div>
    );
};

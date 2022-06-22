import React, { useEffect, useState } from "react";
import { recordKeyCombination } from "react-hotkeys";
import { useKeyMapStore } from "../../global-stores/useKeyMapStore";
import { Button } from "../../ui/Button";

export const OverlayKeybind = ({ className }) => {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);
    const {
        keyNames: { OVERLAY },
        setOverlayKeybind,
    } = useKeyMapStore();
    useEffect(() => {
        if (count > 0) {
            const unsub = recordKeyCombination(({ id }) => {
                setActive(false);
                setOverlayKeybind(id);
            });

            return () => unsub();
        }
    }, [count, setOverlayKeybind]);

    return (
        <div className={`flex items-center ${className}`}>
            <Button
                size="small"
                onClick={() => {
                    setCount((c) => c + 1);
                    setActive(true);
                }}
            >
                {"Set Keybind"}
            </Button>
            <div className={`flex ml-4`}>
                {"Toggle Overlay Keybind"}:
                <span className={`font-bold text-lg`}>
                    {active ? "Listening" : OVERLAY}
                </span>
            </div>
        </div>
    );
};

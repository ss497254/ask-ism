import React, { useEffect, useState } from "react";
import { recordKeyCombination } from "react-hotkeys";
import { useKeyMapStore } from "../../global-stores/useKeyMapStore";
import { Button } from "../../ui/Button";

export const DeafKeybind = ({ className }) => {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);
    const {
        keyNames: { DEAF },
        setDeafKeybind,
    } = useKeyMapStore();
    useEffect(() => {
        if (count > 0) {
            const unsub = recordKeyCombination(({ id }) => {
                setActive(false);
                setDeafKeybind(id);
            });

            return () => unsub();
        }
    }, [count, setDeafKeybind]);

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
                {".keyboardShortcuts.toggleDeafKeybind"}:{" "}
                <span className={`font-bold text-lg`}>
                    {active ? ".keyboardShortcuts.listening" : DEAF}
                </span>
            </div>
        </div>
    );
};

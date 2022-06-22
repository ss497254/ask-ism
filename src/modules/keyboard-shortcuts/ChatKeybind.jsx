import React, { useEffect, useState } from "react";
import { recordKeyCombination } from "react-hotkeys";
import { useKeyMapStore } from "../../global-stores/useKeyMapStore";
import { Button } from "../../ui/Button";

export const ChatKeybind = ({ className }) => {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);
    const {
        keyNames: { CHAT },
        setChatKeybind,
    } = useKeyMapStore();
    useEffect(() => {
        if (count > 0) {
            const unsub = recordKeyCombination(({ id }) => {
                setActive(false);
                setChatKeybind(id);
            });

            return () => unsub();
        }
    }, [count, setChatKeybind]);

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
                toggle chat keybind:{" "}
                <span className={`font-bold text-lg`}>
                    {active ? "listening" : CHAT}
                </span>
            </div>
        </div>
    );
};

import React, { useEffect, useState } from "react";
import { useMicIdStore } from "../stores/useMicIdStore";

export const MicPicker = () => {
    const { micId, setMicId } = useMicIdStore();
    const [options, setOptions] = useState([]);
    useEffect(() => {
        navigator.mediaDevices
            .enumerateDevices()
            .then((x) =>
                setOptions(
                    x.map((y) =>
                        y.kind !== "audioinput"
                            ? null
                            : { id: y.deviceId, label: y.label }
                    )
                )
            );
    }, []);
    return (
        <>
            {options.length === 0 ? (
                <div className="flex">no mics available</div>
            ) : null}
            {options.length ? (
                <select
                    value={micId}
                    onChange={(e) => {
                        const id = e.target.value;
                        setMicId(id);
                    }}
                >
                    {options.map((x) =>
                        !x ? null : (
                            <option key={x.id} value={x.id}>
                                {x.label}
                            </option>
                        )
                    )}
                </select>
            ) : null}
        </>
    );
};

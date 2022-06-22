import React, { useContext } from "react";
import { useTypeSafeMutation } from "../../shared-hooks/useTypeSafeMutation";
import { NativeSelect } from "../../ui/NativeSelect";
import { AuthContext } from "../auth/AuthProvider";

export const PrivacySettingForm = ({}) => {
    const { mutateAsync } = useTypeSafeMutation("userUpdate");
    const { conn, setUser } = useContext(AuthContext);
    const { user } = conn;
    return (
        <div>
            <div className="text-primary-100 mb-2">{"whispers.label"}:</div>
            <div>
                <NativeSelect
                    value={user.whisperPrivacySetting}
                    onChange={(e) => {
                        const whisperPrivacySetting = e.target.value;
                        setUser({ ...user, whisperPrivacySetting });
                        mutateAsync([{ whisperPrivacySetting }]);
                    }}
                >
                    {["whispers.on", "whispers.off"].map((v) => (
                        <option value={v} key={v}>
                            {v}&nbsp;&nbsp;&nbsp;
                        </option>
                    ))}
                </NativeSelect>
            </div>
        </div>
    );
};

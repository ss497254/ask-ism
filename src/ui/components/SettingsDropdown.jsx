import React, { useEffect, useState } from "react";
import {
    DeveloperIcon,
    OutlineGlobe,
    SolidSettings,
    SolidDogenitro,
    SolidBug,
    SolidCaretRight,
    SolidUser,
    SolidHelp,
    SolidMoon,
    SolidSun,
    SolidVolume,
    SolidVolumeOff,
} from "../../icons";
// import { EditProfileModal } from "../modules/user/EditProfileModal";

import { BaseOverlay } from "./BaseOverlay";
import { SettingsIcon } from "./SettingsIcon";

export const SettingsDropdown = ({
    user,
    onCloseDropdown,
    onActionButtonClicked,
}) => {
    const [currentOverlay, setCurrentOverlay] = useState(null);
    const [showEditProfileModal, setShowEditProfileModal] = useState(false);
    const [mode, setmode] = useState("Dark");

    useEffect(() => {
        // let r = document.querySelector(":root");
        // if (mode == "Dark") {
        //     r.style.setProperty("--color-primary-100", "#dee3ea");
        //     r.style.setProperty("--color-primary-200", "#b2bdcd");
        //     r.style.setProperty("--color-primary-300", "#5d7290");
        //     r.style.setProperty("--color-primary-400", "#4e5b6d");
        //     r.style.setProperty("--color-primary-500", "#424d5c");
        //     r.style.setProperty("--color-primary-600", "#323d4d");
        //     r.style.setProperty("--color-primary-700", "#242c37");
        //     r.style.setProperty("--color-primary-800", "#151a21");
        //     r.style.setProperty("--color-primary-900", "#0b0e11");
        // }
        // if (mode == "Light") {
        //     r.style.setProperty("--color-primary-100", "#777777");
        //     r.style.setProperty("--color-primary-200", "#999999");
        //     r.style.setProperty("--color-primary-300", "#aaaaaa");
        //     r.style.setProperty("--color-primary-400", "#aaaaaa");
        //     r.style.setProperty("--color-primary-500", "#bbbbbb");
        //     r.style.setProperty("--color-primary-600", "#cccccc");
        //     r.style.setProperty("--color-primary-700", "#dddddd");
        //     r.style.setProperty("--color-primary-800", "#e0e0e0");
        //     r.style.setProperty("--color-primary-900", "#eeeeee");
        // }
    }, [mode]);

    return (
        <>
            {/* <EditProfileModal
                isOpen={showEditProfileModal}
                onRequestClose={() => setShowEditProfileModal(false)}
            /> */}
            <div
                className="flex whitespace-nowrap overflow-ellipsis border-solid border-primary-300"
                style={{ width: 240 }}
            >
                <BaseOverlay
                    onActionButtonClicked={onActionButtonClicked}
                    onActionButtonClassname={"text-lg"}
                    actionButton={"Logout"}
                    overlay={currentOverlay}
                >
                    <div className="flex flex-col" onClick={() => {}}>
                        <SettingsIcon
                            icon={<SolidSettings />}
                            onClick={() => setShowEditProfileModal(true)}
                            label={"Settings"}
                        />
                        <SettingsIcon
                            icon={<SolidDogenitro />}
                            label={"Wallet"}
                            transition
                            onClick={() => setCurrentOverlay()}
                        />
                        <SettingsIcon
                            icon={
                                mode === "Light" ? <SolidSun /> : <SolidMoon />
                            }
                            label={mode}
                            onClick={() => {
                                if (showEditProfileModal)
                                    setmode(mode == "Light" ? "Dark" : "Light");
                            }}
                            // trailingIcon={<input type="switch" />}
                        />
                        <SettingsIcon icon={<SolidHelp />} label={"Help"} />

                        <SettingsIcon
                            icon={<SolidBug />}
                            label={"Report Bugs"}
                        />
                        <SettingsIcon
                            onClick={() => {}}
                            icon={<DeveloperIcon />}
                            label={"Developer Settings"}
                            transition
                        />
                    </div>
                </BaseOverlay>
            </div>
        </>
    );
};

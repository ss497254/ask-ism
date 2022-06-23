import React from "react";
import { useAccountOverlay } from "../../../global-stores/useAccountOverlay";
// import { useCurrentAnsIdStore } from "../../../global-stores/useCurrentAnsIdStore";
import { SolidMegaphone } from "../../../icons";
import Announcements from "../../../modules/dropdown/AnnouncementDropdown";
// import { useTokenStore } from "../../../modules/auth/useTokenStore";
// import { modalConfirm } from "../../../shared-components/ConfirmModal";
// import { useConn } from "../../../shared-hooks/useConn";
// import { DropdownController } from "../../DropdownController";
// import { SettingsDropdown } from "../../SettingsDropdown";
import { SingleUser } from "../../UserAvatar";

export const ProfileHeader = ({
    avatar,
    onAnnouncementsClick,
    className = "",
    ...props
}) => {
    const { set } = useAccountOverlay.getState();
    const handleClick = () => {
        set({
            isOpen: true,
        });
    };

    return (
        <div
            className={`flex w-full h-6.5 px-3 justify-between items-center bg-gray-100 dark:bg-dark-900 border-b border-smoke-300 dark:border-dark-700 ${className}`}
            {...props}
        >
            <SingleUser
                size="xs"
                src={avatar}
                isOnline={true}
                className="my-auto"
                handleClick={handleClick}
            />
            <span className="text-2xl dark:text-white">
                ask<span className="text-accent dark:text-accent-dark">@</span>
                ism
            </span>
            <Announcements size={20} className="bg-stone-300 h-5.5 w-5.5" />
        </div>
    );
};

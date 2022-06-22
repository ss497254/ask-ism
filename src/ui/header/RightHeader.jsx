import React from "react";
// import { useCurrentAnsIdStore } from "../../global-stores/useCurrentAnsIdStore";
import { SolidMegaphone, SolidMessages, SolidNotification } from "../../icons";
import AnnouncementDropdown from "../../modules/dropdown/AnnouncementDropdown";
import ProfileDropdown from "../../modules/dropdown/ProfileDropdown";

// import { useTokenStore } from "../../modules/auth/useTokenStore";
// import { modalConfirm } from "../../shared-components/ConfirmModal";
import { useConn } from "../../shared-hooks/useConn";
// import { DropdownController } from "../components/DropdownController";
import { SettingsDropdown } from "../components/SettingsDropdown";
import { SingleUser } from "../UserAvatar";

const Icon = ({ className, icon }) => {
    return (
        <div
            className={`relative inline-block ${className}`}
            style={{
                width: 40,
                height: 40,
            }}
            data-testid="single-user-avatar"
        >
            <div
                className={
                    "rounded-full w-full h-full object-cover bg-primary-500 flex justify-center items-center text-xxl text-button"
                }
            >
                {icon}
            </div>
        </div>
    );
};

const RightHeader = ({
    actionButton,
    onAnnouncementsClick,
    onMessagesClick,
    onNotificationsClick,
}) => {
    const conn = useConn();

    // if (!conn) {
    //     return <div />;
    // }

    return (
        <div className="relative z-50 flex space-x-4 items-center justify-end focus:outline-no-chrome w-full">
            {/* <button
                onClick={onAnnouncementsClick}
                className="bg-gray-200 rounded-full"
            >
            <Icon
            icon={
                <SolidMegaphone
                width={23}
                height={23}
                            className="text-gray-900"
                            />
                    }
                />
            </button> */}
            <AnnouncementDropdown size={23} className="bg-gray-200 h-6 w-6" />
            <ProfileDropdown size={23} className="bg-gray-200 h-6 w-6">
                <SingleUser
                    className={"focus:outline-no-chrome"}
                    size="sm"
                    src={"/img/ss497254.png"}
                />
            </ProfileDropdown>
            {actionButton}
            {/* <SettingsDropdown
                onActionButtonClicked={() => {
                    // modalConfirm("Are you sure you want to logout?", () => {
                    //     // useCurrentAnsIdStore
                    //     //     .getState()
                    //     //     .setCurrentAnsId(null);
                    //     // useTokenStore.getState().setTokens({
                    //     //     accessToken: "",
                    //     //     refreshToken: "",
                    //     // });
                    // });
                }}
                onCloseDropdown={() => {}}
                user={conn.user}
            /> */}
            {/* <DropdownController
                zIndex={20}
                className="top-9 right-9 md:right-4 fixed"
                innerClassName="fixed  transform -translate-x-full"
                overlay={(close) => (
                    <div />
                )}
            >
        </DropdownController> */}
        </div>
    );
};

export default RightHeader;

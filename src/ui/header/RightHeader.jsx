import React from "react";
import AnnouncementDropdown from "../../modules/dropdown/AnnouncementDropdown";
import ProfileDropdown from "../../modules/dropdown/ProfileDropdown";
import { useConn } from "../../shared-hooks/useConn";
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

const RightHeader = ({}) => {
    const { user } = useConn();

    return (
        <div className="relative z-50 flex space-x-4 items-center justify-end focus:outline-no-chrome w-full">
            <AnnouncementDropdown size={23} className="bg-gray-200 h-6 w-6" />
            <ProfileDropdown size={23} className="bg-gray-200 h-6 w-6">
                <SingleUser
                    className={"focus:outline-no-chrome"}
                    size="sm"
                    src={user.avatarUrl || "/img/male-1a.jpg"}
                />
            </ProfileDropdown>
        </div>
    );
};

export default RightHeader;

import React, { useEffect, useState } from "react";
import { ProfileHeaderWrapper } from "./ProfileHeaderWrapper";
import { Button } from "../components/Button";
import { UserBadge } from "./UserBadge";
import { SingleUser } from "../UserAvatar/SingleUser";
import {
    SolidCompass,
    SolidFriends,
    SolidMessages,
    SolidCalendar,
    SolidPersonAdd,
} from "../../icons";
// import { EditProfileModal } from "../modules/user/EditProfileModal";
import { badge, Badges } from "./UserSummaryCard";

export const ProfileHeader = ({
    displayName,
    username,
    user,
    children,
    isCurrentUser,
    pfp,
    badges = [],
}) => {
    console.log("profile header");
    // const { mutateAsync, isLoading: followLoading } =
    //     useTypeSafeMutation("follow");
    // const { mutateAsync: unblock, isLoading: unblockLoading } =
    //     useTypeSafeMutation("userUnblock");
    // const { mutateAsync: block, isLoading: blockLoading } =
    //     useTypeSafeMutation("userBlock");

    const [showEditProfileModal, setShowEditProfileModal] = useState(false);

    {
        /* <EditProfileModal
        isOpen={showEditProfileModal}
        onRequestClose={() => setShowEditProfileModal(false)}
        onEdit={(d) => {
            update(["getUserProfile", d.username], (x) =>
                !x ? x : { ...x, ...d }
            );
            if (d.username !== username) {
                preloadPush({
                    route: "profile",
                    data: { username: d.username },
                });
            }
        }}
    /> */
    }
    return (
        <ProfileHeaderWrapper coverUrl={user.bannerUrl || "/img/ss497254.png"}>
            <div className="flex w-full relative justify-between min-h-6 gap-4 pb-2 mb-2">
                <SingleUser
                    size="xxl"
                    className="-mt-[100px] flex-none bg-inherit rounded-full outline outline-accent shadow-outlineLg"
                    src={pfp}
                />
                <div className="flex gap-2 flex-1 max-w-[150px] md:max-w-[200px]">
                    <Button className="w-full rounded-full" btn="accent">
                        <SolidCompass />
                    </Button>
                    <Button
                        className="w-full rounded-full"
                        btn="accent"
                        loading
                    >
                        <SolidCompass />
                    </Button>
                    <Button className="w-full rounded-full" btn="accent">
                        <SolidMessages />
                    </Button>
                </div>
            </div>
            <div className="flex flex-col px-2">
                <h4 className="font-bold truncate">
                    {displayName || username}
                </h4>
                <div className="flex flex-row items-center">
                    <p className="text-gray-700 dark:text-gray-300 mr-2">{`@${username}`}</p>

                    {user.followsYou && (
                        <UserBadge color="grey" variant="primary-700">
                            {"Follows You"}
                        </UserBadge>
                    )}
                </div>
                <div className="mt-2 flex gap-2 items-center">
                    {/* <Badges badges={badges} /> */}
                    {children}
                    <SolidCalendar style={{ color: "secondary" }} />
                    Joined at {new Date().toLocaleDateString()}
                </div>
            </div>
        </ProfileHeaderWrapper>
    );
};

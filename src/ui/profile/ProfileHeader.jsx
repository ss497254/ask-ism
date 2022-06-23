import React, { useEffect, useState } from "react";
import { ProfileHeaderWrapper } from "./ProfileHeaderWrapper";
import { Button } from "../components/Button";
import { Badge } from "./Badge";
import { SingleUser } from "../UserAvatar/SingleUser";
import {
    SolidCompass,
    SolidSettings,
    SolidCalendar,
    OutlineGlobe,
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
            <div className="flex w-full relative justify-between pb-2 mb-1">
                <SingleUser
                    size="xxl"
                    className="-mt-[90px] flex-none bg-inherit rounded-full outline outline-[3px] outline-stone-100 dark:outline-dark-800 shadow-outlineLg"
                    src={pfp}
                />
                <div className="flex gap-2 h-6">
                    <Button className="w-6 rounded-full" btn="accent" loading>
                        <SolidCompass />
                    </Button>
                    {/* <Button className="w-6 rounded-full" btn="accent">
                        <SolidCompass />
                    </Button> */}
                    <Button className="w-6 rounded-full" btn="accent">
                        <a
                            href={user.website || "#"}
                            target="_blank"
                            className="p-2"
                        >
                            <OutlineGlobe size={18} />
                        </a>
                    </Button>
                    {isCurrentUser && (
                        <Button className="w-6 rounded-full" btn="accent">
                            <SolidSettings />
                        </Button>
                    )}
                </div>
            </div>
            <div className="flex flex-col px-2">
                <h4 className="font-bold truncate">
                    {displayName || username}
                </h4>
                <div className="flex flex-row items-center">
                    <p className="text-gray-700 dark:text-gray-300 mr-2">{`@${username}`}</p>

                    {user.staff && (
                        <Badge title={user.staff}>{user.staff}</Badge>
                    )}
                </div>
                <div className="flex mt-2 gap-5">
                    <div className="">
                        <span className="font-bold">{user.questions || 0}</span>
                        <span className="ml-1.5">{"Questions"}</span>
                    </div>
                    <div className="">
                        <span className="font-bold">{user.answers || 0}</span>
                        <span className="ml-1.5">{"Answers"}</span>
                    </div>
                </div>
                <div className="mt-2 flex gap-2 items-center">
                    {children}
                    <SolidCalendar style={{ color: "secondary" }} />
                    Joined at {new Date().toLocaleDateString()}
                </div>
            </div>
        </ProfileHeaderWrapper>
    );
};

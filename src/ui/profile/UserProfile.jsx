import React from "react";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileTabs } from "./ProfileTabs";
import { ContributorBadge, StaffBadge } from "../../icons/badges";

export const UserProfile = ({ user, isCurrentUser }) => {
    const badges = [];
    const tags = [];

    if (user.staff) {
        tags.push({
            icon: "Staff",
            children: "DH Staff",
        });
    }

    if (user.contributions > 0) {
        tags.push({
            icon: "dogeContributor",
            contributions: user.contributions,
            children: "dhContributor",
        });
    }

    return (
        <>
            <ProfileHeader
                user={user}
                pfp={user.avatarUrl}
                displayName={user.displayName}
                isCurrentUser={isCurrentUser}
                username={user.username}
            />
            <ProfileTabs
                user={user}
                isCurrentUser={isCurrentUser}
                className="mt-4"
                aboutTags={tags}
            />
        </>
    );
};

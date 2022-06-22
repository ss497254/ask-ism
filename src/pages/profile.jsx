import React, { useContext } from "react";
import { AuthContext } from "../modules/auth/AuthProvider";
import { HeaderController } from "../modules/display/HeaderController";
import { MiddlePanel } from "../modules/layouts/GridPanels";
import { UserProfile } from "../ui/profile/UserProfile";

export default function Profile({}) {
    const { user } = useContext(AuthContext).conn;

    return (
        <>
            {user ? (
                <HeaderController
                    title={user.displayName}
                    embed={{ image: user.avatarUrl }}
                    description={user.bio ? user.bio : undefined}
                />
            ) : null}
            <MiddlePanel>
                <UserProfile user={user} isCurrentUser />
            </MiddlePanel>
        </>
    );
}

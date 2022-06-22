import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { HeaderController } from "../display/HeaderController";
import { MiddlePanel } from "../layouts/GridPanels";
import { UserProfileController } from "./UserProfileController";

export const UserPage = ({ username = "ss497254" }) => {
    const { user } = useContext(AuthContext).conn;

    return (
        <>
            {user ? (
                <HeaderController
                    title={user.displayName}
                    embed={{ image: user.avatarUrl }}
                    description={user.bio ? user.bio : undefined}
                />
            ) : (
                <HeaderController />
            )}
            <MiddlePanel>
                <UserProfileController key={username} />
            </MiddlePanel>
        </>
    );
};

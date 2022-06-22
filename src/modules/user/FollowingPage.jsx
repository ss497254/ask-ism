import React from "react";
import { WaitForAuth } from "../auth/WaitForAuth";
import { FollowingOnlineController } from "../dashboard/FollowingOnlineController";
import { ProfileBlockController } from "../dashboard/ProfileBlockController";
import { LeftPanel, MiddlePanel, RightPanel } from "../layouts/GridPanels";
import { FollowingController } from "./FollowingController";
import { UserProfileController } from "./UserProfileController";
import { HeaderController } from "../display/HeaderController";
import { MainLayout } from "../layouts/MainLayout";

export const FollowingPage = ({}) => {
    return (
        <WaitForAuth>
            <HeaderController title={"Following List"} />
            <MainLayout
                leftPanel={<FollowingOnlineController />}
                rightPanel={<ProfileBlockController />}
            >
                <FollowingController />
            </MainLayout>
        </WaitForAuth>
    );
};

FollowingPage.ws = true;

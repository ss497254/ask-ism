import React from "react";
import { WaitForAuth } from "../auth/WaitForAuth";
import { FollowingOnlineController } from "../dashboard/FollowingOnlineController";
import { ProfileBlockController } from "../dashboard/ProfileBlockController";
import { LeftPanel, MiddlePanel, RightPanel } from "../layouts/GridPanels";
import { HeaderController } from "../display/HeaderController";
import { MainLayout } from "../layouts/MainLayout";
import { FollowersOnlineWrapper } from "../../ui/FollowersOnline";

export const FollowingOnlinePage = ({}) => {
    return (
        <WaitForAuth>
            <HeaderController embed={{}} title={"Following Online List"} />
            <MainLayout
                leftPanel={<FollowingOnlineController />}
                rightPanel={<ProfileBlockController />}
            >
                <div className="mt-4">
                    <FollowingOnlineController></FollowingOnlineController>
                </div>
            </MainLayout>
        </WaitForAuth>
    );
};

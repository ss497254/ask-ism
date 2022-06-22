import React from "react";
import { WaitForAuth } from "../auth/WaitForAuth";
import { HeaderController } from "../display/HeaderController";
import { MainLayout } from "../layouts/MainLayout";
import { FloatingAnsInfo } from "../layouts/FloatingAnsInfo";
import { TabletSidebar } from "../layouts/TabletSidebar";
import { DeveloperPanel } from "./DeveloperPanel";
import { ProfileBlockController } from "../dashboard/ProfileBlockController";
import { YourBots } from "./YourBots";

export const BotsPage = ({}) => {
    return (
        <WaitForAuth>
            <HeaderController embed={{}} title={"Bots"} />
            <MainLayout
                floatingAnsInfo={<FloatingAnsInfo />}
                tabletSidebar={<TabletSidebar />}
                leftPanel={<DeveloperPanel />}
                rightPanel={<ProfileBlockController />}
                mobileHeader={undefined}
            >
                <YourBots />
            </MainLayout>
        </WaitForAuth>
    );
};

BotsPage.ws = true;

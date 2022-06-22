import React from "react";
import { WaitForAuth } from "../auth/WaitForAuth";
import { HeaderController } from "../display/HeaderController";
import { MainLayout } from "../layouts/MainLayout";
import { FloatingAnsInfo } from "../layouts/FloatingAnsInfo";
import { TabletSidebar } from "../layouts/TabletSidebar";
import { DeveloperPanel } from "./DeveloperPanel";
import { ProfileBlockController } from "../dashboard/ProfileBlockController";
import { EditBot } from "./EditBot";

export const BotsEditPage = ({}) => {
    return (
        <WaitForAuth>
            <HeaderController embed={{}} title={"Edit Bot"} />
            <MainLayout
                floatingAnsInfo={<FloatingAnsInfo />}
                tabletSidebar={<TabletSidebar />}
                leftPanel={<DeveloperPanel />}
                rightPanel={<ProfileBlockController />}
                mobileHeader={undefined}
            >
                <EditBot />
            </MainLayout>
        </WaitForAuth>
    );
};

BotsEditPage.ws = true;

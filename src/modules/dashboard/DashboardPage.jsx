import React from "react";
import { HeaderController } from "../display/HeaderController";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";
import { FeedController } from "./FeedController";

export const DashboardPage = ({}) => {
    return (
        <>
            <HeaderController embed={{}} title={"Dashboard"} />
            <DefaultDesktopLayout>
                <FeedController />
            </DefaultDesktopLayout>
        </>
    );
};

DashboardPage.ws = true;

import React from "react";
import { HeaderController } from "../display/HeaderController";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";
import { MiddlePanel } from "../layouts/GridPanels";
import { PrivacySettingForm } from "./PrivacySettingForm";

export const PrivacySettingsPage = () => {
    return (
        <DefaultDesktopLayout>
            <HeaderController embed={{}} title={"title"} />
            <MiddlePanel>
                <h1 className={`pb-4 text-4xl text-primary-100`}>{"header"}</h1>
                <PrivacySettingForm />
            </MiddlePanel>
        </DefaultDesktopLayout>
    );
};

PrivacySettingsPage.ws = true;

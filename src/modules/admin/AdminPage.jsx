import * as React from "react";
import { WaitForAuth } from "../auth/WaitForAuth";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";
import { AdminPageForm } from "./AdminPageForm";

export const AdminPage = () => {
    return (
        <WaitForAuth>
            <DefaultDesktopLayout>
                <AdminPageForm />
            </DefaultDesktopLayout>
        </WaitForAuth>
    );
};

AdminPage.ws = true;

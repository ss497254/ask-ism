import React from "react";
import { HeaderController } from "../display/HeaderController";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";
import { ScheduledAnswersList } from "./ScheduledAnswersList";

export const ScheduledAnswersPage = ({}) => {
    return (
        <>
            <HeaderController embed={{}} title="Scheduled Answers" />
            <DefaultDesktopLayout>
                <ScheduledAnswersList />
            </DefaultDesktopLayout>
        </>
    );
};

ScheduledAnswersPage.ws = true;

import { Formik } from "formik";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { object, string } from "superstruct";
import { InputField } from "../../form-fields/InputField";
import { useOverlayStore } from "../../global-stores/useOverlayStore";
import { validateStruct } from "../../lib/validateStruct";

import { Button } from "../../ui/Button";
import { OverlayKeybind } from "../keyboard-shortcuts";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";
import { MiddlePanel } from "../layouts/GridPanels";

const overlaySettingsStruct = object({
    // appTitle()
});
const validateData = validateStruct(overlaySettingsStruct);

export const OverlaySettingsPage = () => {
    const { appTitle } = useOverlayStore.getState();
    const { push } = useRouter();

    return (
        <DefaultDesktopLayout>
            <MiddlePanel>
                <div className="flex flex-col text-primary-100">
                    <OverlayKeybind className={`mb-4`} />
                    <Formik
                        initialValues={{
                            appTitle,
                        }}
                        validateOnChange={false}
                        validate={(values) => {
                            return validateData({
                                ...values,
                                appTitle: values.appTitle.trim(),
                            });
                        }}
                        onSubmit={(data) => {
                            useOverlayStore.getState().setData(data);
                        }}
                    >
                        {({ handleSubmit }) => (
                            <div className="flex">
                                <InputField
                                    errorMsg={"input.errorMsg"}
                                    label={"input.label"}
                                    name="appTitle"
                                />
                                <div className={`flex mt-12`}>
                                    <Button
                                        type="button"
                                        onClick={() => handleSubmit()}
                                        className={`ml-2`}
                                    >
                                        {"save"}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </MiddlePanel>
        </DefaultDesktopLayout>
    );
};

OverlaySettingsPage.ws = true;

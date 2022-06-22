import { Form, Formik } from "formik";
import React from "react";
import { InputField } from "../../form-fields/InputField";
import { useWrappedConn } from "../../shared-hooks/useConn";
import { Button } from "../../ui/Button";
import { ButtonLink } from "../../ui/ButtonLink";
import { Modal } from "../../ui/Modal";
import { showErrorToast } from "../../lib/showErrorToast";

export const CreateBotModal = ({ onRequestClose, data }) => {
    const wrapper = useWrappedConn();

    return (
        <Modal isOpen onRequestClose={onRequestClose}>
            <Formik
                initialValues={
                    data
                        ? data
                        : {
                              username: "",
                          }
                }
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={({ username }) => {
                    wrapper.mutation.userCreateBot(username).then((r) => {
                        if (r.isUsernameTaken) {
                            showErrorToast(
                                ".modals.createBotModal.usernameTaken"
                            );
                        }
                        if (r.error) {
                            showErrorToast(r.error);
                        }
                    });
                    onRequestClose();
                }}
            >
                {({ isSubmitting }) => (
                    <Form
                        className={`grid grid-cols-3 gap-4 focus:outline-none w-full`}
                    >
                        <div className={`col-span-3 block`}>
                            <h4 className={`mb-2 text-primary-100`}>
                                {".modals.createBotModal.title"}
                            </h4>
                            <div className={`text-primary-300`}>
                                {".modals.createBotModal.subtitle"}
                            </div>
                        </div>
                        <div className={`flex h-full w-full col-span-2`}>
                            <InputField
                                className={`mb-4`}
                                errorMsg={
                                    ".modals.editProfileModal.usernameError"
                                }
                                label={".modals.editProfileModal.usernameLabel"}
                                name="username"
                            />
                        </div>

                        <div
                            className={`flex pt-2 space-x-3 col-span-full items-center`}
                        >
                            <Button
                                loading={isSubmitting}
                                type="submit"
                                className={`mr-3`}
                            >
                                {".modals.createBotModal.title"}
                            </Button>
                            <ButtonLink type="button" onClick={onRequestClose}>
                                {"cancel"}
                            </ButtonLink>
                        </div>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};

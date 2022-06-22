import { Form, Formik } from "formik";
import React, { useContext, useEffect } from "react";
import { object, pattern, size, string, optional } from "superstruct";
import { InputField } from "../../form-fields/InputField";
import { showErrorToast } from "../../lib/showErrorToast";
import { validateStruct } from "../../lib/validateStruct";
import { useTypeSafeMutation } from "../../shared-hooks/useTypeSafeMutation";
import { Button } from "../../ui/Button";
import { ButtonLink } from "../../ui/ButtonLink";
import { Modal } from "../../ui/Modal";
import { AuthContext } from "../auth/AuthProvider";

const profileStruct = object({
    displayName: size(string(), 2, 50),
    username: pattern(string(), /^(\w){4,15}$/),
    bio: size(string(), 0, 160),
    avatarUrl: pattern(
        string(),
        /^https?:\/\/(www\.|)((a|p)bs.twimg.com\/(profile_images|sticky\/default_profile_images)\/(.*)\.(jpg|png|jpeg|webp)|avatars\.githubusercontent\.com\/u\/[^\s]+|github.com\/identicons\/[^\s]+|cdn.discordapp.com\/avatars\/[^\s]+\/[^\s]+\.(jpg|png|jpeg|webp))/
    ),
    bannerUrl: optional(
        pattern(
            string(),
            /^https?:\/\/(www\.|)(pbs.twimg.com\/profile_banners\/(.+)\/(.+)(?:\.(jpg|png|jpeg|webp))?|avatars\.githubusercontent\.com\/u\/)/
        )
    ),
});

const validateFn = validateStruct(profileStruct);

export const EditProfileModal = ({ isOpen, onRequestClose, onEdit }) => {
    const { conn, setUser } = useContext(AuthContext);
    const { mutateAsync } = useTypeSafeMutation("editProfile");

    if (!conn) {
        return null;
    }

    const { user } = conn;
    console.log({ user });
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
            {isOpen ? (
                <Formik
                    initialValues={{
                        displayName: user.displayName,
                        username: user.username,
                        bio: user.bio || "",
                        avatarUrl: user.avatarUrl,
                        bannerUrl: user?.bannerUrl || "",
                    }}
                    validateOnChange={false}
                    validate={(values) => {
                        return validateFn({
                            ...values,
                            bannerUrl: values.bannerUrl || undefined,
                            displayName: values.displayName.trim(),
                        });
                    }}
                    onSubmit={async (data) => {
                        const { isUsernameTaken } = await mutateAsync([data]);
                        if (isUsernameTaken) {
                            showErrorToast("Username Taken");
                        } else {
                            if (conn) {
                                setUser({
                                    ...conn?.user,
                                    ...data,
                                    bio: data.bio.trim(),
                                    displayName: data.displayName.trim(),
                                });
                            }
                            onEdit?.(data);
                            onRequestClose();
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className={`flex-col w-full`}>
                            <h4 className={`mb-2 text-primary-100`}>
                                {"Edit Profile"}
                            </h4>
                            <InputField
                                className={`mb-4`}
                                errorMsg={"Avatar Url Error"}
                                label={"Avatar Url"}
                                name="avatarUrl"
                            />
                            <InputField
                                className={`mb-4`}
                                errorMsg={"Avatar Url Error"}
                                label={"Banner Url"}
                                name="bannerUrl"
                            />
                            <InputField
                                className={`mb-4`}
                                errorMsg={"Display Name Error"}
                                label={"Display Name"}
                                name="displayName"
                            />
                            <InputField
                                className={`mb-4`}
                                errorMsg={"Username Error"}
                                label={"Username"}
                                name="username"
                            />
                            <InputField
                                className={`mb-4`}
                                errorMsg={"Bio Error"}
                                label={"Bio"}
                                textarea
                                name="bio"
                            />
                            <div className={`flex pt-2 items-center`}>
                                <ButtonLink
                                    type="button"
                                    onClick={onRequestClose}
                                >
                                    {"Cancel"}
                                </ButtonLink>
                                <Button
                                    loading={isSubmitting}
                                    type="submit"
                                    className={`mr-3`}
                                >
                                    {"Save"}
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            ) : null}
        </Modal>
    );
};

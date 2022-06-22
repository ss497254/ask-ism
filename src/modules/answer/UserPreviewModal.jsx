import React, { useContext } from "react";
import { useDebugAudioStore } from "../../global-stores/useDebugAudio";
import { useConn } from "../../shared-hooks/useConn";
import { useCurrentAnsInfo } from "../../shared-hooks/useCurrentAnsInfo";
import { useTypeSafeMutation } from "../../shared-hooks/useTypeSafeMutation";
import { useQuery } from "react-query";
import { Button } from "../../ui/Button";
import { Modal } from "../../ui/Modal";
import { Spinner } from "../../ui/Spinner";
import { VerticalUserInfoWithFollowButton } from "../user/VerticalUserInfoWithFollowButton";
import { AudioDebugConsumerSection } from "./AudioDebugConsumerSection";
import { UserPreviewModalContext } from "./UserPreviewModalProvider";
import { VolumeSliderController } from "./VolumeSliderController";

const UserPreview = ({
    id,
    isCreator,
    isMe,
    iAmCreator,
    iAmMod,
    message,
    roomPermissions,
    onClose,
}) => {
    const { mutateAsync: setListener } = useTypeSafeMutation("setListener");
    const { mutateAsync: changeModStatus } =
        useTypeSafeMutation("changeModStatus");
    const { mutateAsync: changeAnsCreator } =
        useTypeSafeMutation("changeAnsCreator");
    const { mutateAsync: addSpeaker } = useTypeSafeMutation("addSpeaker");
    const { mutateAsync: deleteAnsChatMessage } = useTypeSafeMutation(
        "deleteAnsChatMessage"
    );
    const { mutateAsync: roomBan } = useTypeSafeMutation("roomBan");
    const { mutateAsync: banFromAnsChat } =
        useTypeSafeMutation("banFromAnsChat");
    const { mutateAsync: unbanFromAnsChat } =
        useTypeSafeMutation("unbanFromAnsChat");
    const { data, isLoading } = useQuery(["getUserProfile", id].join("/"));
    const { debugAudio } = useDebugAudioStore();

    if (isLoading) {
        return (
            <div
                style={{ height: "400px", maxHeight: "100%" }}
                className={`flex items-center justify-center w-full`}
            >
                <Spinner />
            </div>
        );
    }

    if (!data) {
        return (
            <div
                className={`flex p-6 text-center items-center justify-center w-full font-bold text-primary-100`}
            >
                This user is gone.
            </div>
        );
    }

    if ("error" in data) {
        const error = data.error;

        let errorMessage = "errors.default";

        switch (error) {
            case "blocked":
                errorMessage = "errors.blocked";
                break;
        }

        return (
            <div
                className={`flex p-6 text-center items-center justify-center w-full font-bold text-primary-100`}
            >
                {errorMessage}
            </div>
        );
    }

    const canDoModStuffOnThisUser =
        !isMe &&
        (iAmCreator || iAmMod) &&
        !isCreator &&
        (!roomPermissions?.isMod || iAmCreator);

    // [shouldShow, key, onClick, text]
    const buttonData = [
        [
            iAmCreator && !isMe && roomPermissions?.isSpeaker,
            "changeAnsCreator",
            () => {
                onClose();
                changeAnsCreator([id]);
            },
            "profileModal.makeAnsCreator",
        ],
        [
            !isMe && iAmCreator,
            "makeMod",
            () => {
                onClose();
                changeModStatus([id, !roomPermissions?.isMod]);
            },
            roomPermissions?.isMod
                ? "profileModal.unmod"
                : "profileModal.makeMod",
        ],
        [
            canDoModStuffOnThisUser &&
                !roomPermissions?.isSpeaker &&
                roomPermissions?.askedToSpeak,
            "addSpeakerButton",
            () => {
                onClose();
                addSpeaker([id]);
            },
            "profileModal.addAsSpeaker",
        ],
        [
            canDoModStuffOnThisUser && roomPermissions?.isSpeaker,
            "moveToListenerButton",
            () => {
                onClose();
                setListener([id]);
            },
            "profileModal.moveToListener",
        ],
        [
            canDoModStuffOnThisUser && (iAmCreator || !roomPermissions?.isMod),
            "banFromChat",
            () => {
                onClose();
                banFromAnsChat([id]);
            },
            "profileModal.banFromChat",
        ],
        [
            canDoModStuffOnThisUser && (iAmCreator || !roomPermissions?.isMod),
            "unbanFromChat",
            () => {
                onClose();
                unbanFromAnsChat([id]);
            },
            "profileModal.unBanFromChat",
        ],
        [
            canDoModStuffOnThisUser && (iAmCreator || !roomPermissions?.isMod),
            "banFromAns",
            () => {
                onClose();
                roomBan([id]);
            },
            "profileModal.banFromAns",
        ],
        [
            canDoModStuffOnThisUser && (iAmCreator || !roomPermissions?.isMod),
            "banIpFromAns",
            () => {
                onClose();
                roomBan([id, true]);
            },
            "profileModal.banIPFromAns",
        ],
        [
            isMe &&
                !iAmCreator &&
                (roomPermissions?.askedToSpeak || roomPermissions?.isSpeaker),
            "goBackToListener",
            () => {
                onClose();
                setListener([id]);
            },
            "profileModal.goBackToListener",
        ],
        [
            !!message,
            "deleteMessage",
            () => {
                if (message?.id) {
                    deleteAnsChatMessage([message.userId, message.id]);

                    onClose();
                }
            },
            "profileModal.deleteMessage",
        ],
    ];

    return (
        <div className={`flex flex-col w-full`}>
            <div className={`flex bg-primary-900 flex-col`}>
                <VerticalUserInfoWithFollowButton
                    idOrUsernameUsedForQuery={id}
                    user={data}
                />
            </div>
            {!isMe && (isCreator || roomPermissions?.isSpeaker) ? (
                <div className={`flex pb-3 bg-primary-800`}>
                    <VolumeSliderController userId={id} />
                </div>
            ) : null}
            <div className="flex px-6 flex-col bg-primary-800">
                {debugAudio ? <AudioDebugConsumerSection userId={id} /> : null}
                {buttonData.map(([shouldShow, key, onClick, text]) => {
                    return shouldShow ? (
                        <Button
                            color="secondary"
                            className={`my-1 text-base`}
                            key={key}
                            onClick={onClick}
                        >
                            {text}
                        </Button>
                    ) : null;
                })}
            </div>
        </div>
    );
};

export const UserPreviewModal = ({ room, users }) => {
    const { isCreator: iAmCreator, isMod } = useCurrentAnsInfo();
    const { data, setData } = useContext(UserPreviewModalContext);
    const conn = useConn();
    return (
        <Modal
            variant="userPreview"
            onRequestClose={() => setData(null)}
            isOpen={!!data}
        >
            {!data ? null : (
                <UserPreview
                    id={data.userId}
                    isCreator={room.creatorId === data.userId}
                    roomPermissions={
                        users.find((u) => u.id === data.userId)?.roomPermissions
                    }
                    iAmCreator={iAmCreator}
                    isMe={conn.user.id === data.userId}
                    iAmMod={isMod}
                    message={data.message}
                    onClose={() => setData(null)}
                />
            )}
        </Modal>
    );
};

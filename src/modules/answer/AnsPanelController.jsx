import React, { useState } from "react";
import { useCurrentAnsIdStore } from "../../global-stores/useCurrentAnsIdStore";
import { useConn } from "../../shared-hooks/useConn";
import { useScreenType } from "../../shared-hooks/useScreenType";
import { CenterLoader } from "../../ui/CenterLoader";
import { AnsHeader } from "../../ui/AnsHeader";
import { CreateAnsModal } from "../dashboard/CreateAnsModal";
import { HeaderController } from "../display/HeaderController";
import { MiddlePanel } from "../layouts/GridPanels";
import { AnsPanelIconBarController } from "./AnsPanelIconBarController";
import { AnsUsersPanel } from "./AnsUsersPanel";
import { useGetAnsByQueryParam } from "./useGetAnsByQueryParam";
import { UserPreviewModal } from "./UserPreviewModal";

export const AnsPanelController = ({
    setAnsData,
    showMobileEditModal,
    setShowMobileEditModal,
}) => {
    const conn = useConn();
    // const { currentAnsId } = useCurrentAnsIdStore();
    const [showEditModal, setShowEditModal] = useState(false);
    const { data, isLoading } = useGetAnsByQueryParam();
    const screenType = useScreenType();

    // if (isLoading || !currentAnsId) {
    //     return (
    //         <>
    //             <MiddlePanel>
    //                 <CenterLoader />
    //             </MiddlePanel>
    //         </>
    //     );
    // }

    // if (!data || "error" in data) {
    //     return null;
    // }

    const roomCreator = data.users.find((x) => x.id === data.room.creatorId);
    if (setAnsData) setAnsData(data);

    return (
        <>
            <CreateAnsModal
                onRequestClose={() => {
                    setShowEditModal(false);
                    setShowMobileEditModal(false);
                }}
                edit
                data={{
                    name: data.room.name,
                    description: data.room.description || "",
                    privacy: data.room.isPrivate ? "private" : "public",
                }}
            />
            {/* {showEditModal || showMobileEditModal ? (
            ) : null} */}
            <HeaderController embed={{}} title={data.room.name} />
            <MiddlePanel
                stickyChildren={
                    screenType !== "fullscreen" ? (
                        <AnsHeader
                            onTitleClick={
                                data.room.creatorId === conn.user.id
                                    ? () => setShowEditModal(true)
                                    : undefined
                            }
                            title={data.room.name}
                            description={data.room.description || ""}
                            names={roomCreator ? [roomCreator.username] : []}
                        />
                    ) : (
                        ""
                    )
                }
            >
                <UserPreviewModal {...data} />
                {screenType === "fullscreen" ? null : (
                    <AnsUsersPanel {...data} />
                )}
                <div
                    className={`sticky bottom-0 pb-7 bg-primary-900 ${
                        screenType === "fullscreen" || screenType === "1-cols"
                            ? "flex-1"
                            : ""
                    }`}
                >
                    <AnsPanelIconBarController {...data} />
                </div>
            </MiddlePanel>
        </>
    );
};

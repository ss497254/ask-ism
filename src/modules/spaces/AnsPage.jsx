import router, { useRouter } from "next/router";
import React, { useState } from "react";
import { validate } from "uuid";
import { isServer } from "../../lib/isServer";
import { defaultQueryFn } from "../../lib/defaultQueryFn";
import { FollowingOnlineController } from "../dashboard/FollowingOnlineController";
import { MainLayout } from "../layouts/MainLayout";
import { TabletSidebar } from "../layouts/TabletSidebar";
import { AnsChatController } from "./AnsChatController";
import { AnsOpenGraphPreview } from "./AnsOpenGraphPreview";
import { AnsPanelController } from "./AnsPanelController";
import { UserPreviewModalProvider } from "./UserPreviewModalProvider";
import { PageHeader } from "../../ui/mobile/MobileHeader";
import { useConn } from "../../shared-hooks/useConn";

export const AnsPage = ({ room }) => {
    const { query, back } = useRouter();
    const key = typeof query.id === "string" ? query.id : "";
    const { leaveAns } = useLeaveAns();
    const conn = useConn();
    const [roomData, setAnsData] = useState({
        room: { creatorId: 432, name: "chor bazaar" },
        users: [],
    });
    const [showMobileEditModal, setShowMobileEditModal] = useState(false);

    return (
        <>
            <UserPreviewModalProvider>
                <MainLayout
                    floatingAnsInfo={null}
                    tabletSidebar={<TabletSidebar />}
                    leftPanel={<FollowingOnlineController />}
                    // rightPanel={<AnsChatController />}
                    mobileHeader={
                        <PageHeader
                            title={
                                <>
                                    <div
                                        className="text-center absolute flex flex-col left-1/2 top-1/2 transform translate-x-n1/2 translate-y-n1/2 w-3/5"
                                        onClick={() =>
                                            roomData?.room.creatorId ===
                                            conn.user.id
                                                ? setShowMobileEditModal(true)
                                                : ""
                                        }
                                    >
                                        <span className="line-clamp-1">
                                            {roomData?.room.name}
                                        </span>
                                        {roomData && (
                                            <span
                                                className={
                                                    "text-sm text-center font-normal truncate"
                                                }
                                            >
                                                with{" "}
                                                <span
                                                    className={
                                                        "font-bold truncate"
                                                    }
                                                >
                                                    {
                                                        roomData?.users.find(
                                                            (x) =>
                                                                x.id ===
                                                                roomData?.room
                                                                    .creatorId
                                                        )?.username
                                                    }
                                                </span>
                                            </span>
                                        )}
                                    </div>
                                    <button
                                        className={
                                            "absolute right-3 top-1/2 transform translate-y-n1/2 font-bold text-accent"
                                        }
                                        style={{ fontSize: "14px" }}
                                        onClick={() => {
                                            router.push("/");
                                        }}
                                    >
                                        Leave
                                    </button>
                                </>
                            }
                            onBackClick={() => back()}
                        />
                    }
                >
                    <AnsPanelController
                        key={key}
                        // setAnsData={setAnsData}
                        showMobileEditModal={showMobileEditModal}
                        setShowMobileEditModal={setShowMobileEditModal}
                    />
                </MainLayout>
            </UserPreviewModalProvider>
        </>
    );
};

AnsPage.ws = true;
// ssr
AnsPage.getInitialProps = async ({ query }) => {
    // const key = typeof query.id === "string" && query.id ? query.id : "";
    let room = 34523523;

    // if (isServer && key) {
    //     try {
    //         const resp = await defaultQueryFn({ queryKey: `/room/${key}` });
    //         if ("room" in resp) {
    //             room = resp.room;
    //         }
    //     } catch {}
    // }

    return { room };
};

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useCurrentAnsIdStore } from "../../global-stores/useCurrentAnsIdStore";
import { isServer } from "../../lib/isServer";
import { validate as uuidValidate } from "uuid";
import { showErrorToast } from "../../lib/showErrorToast";
import { useQuery } from "react-query";
import { useAnsChatStore } from "./chat/useAnsChatStore";

export const useGetAnsByQueryParam = () => {
    // const { setCurrentAnsId } = useCurrentAnsIdStore();
    // const { query } = useRouter();
    // console.log("query hai", query);
    // const roomId = typeof query.id === "string" ? query.id : "";
    // const { data, isLoading } = useQuery(
    //     ["joinAnsAndGetInfo", roomId || ""].join("/"),
    //     {
    //         enabled: uuidValidate(roomId) && !isServer,
    //         refetchOnMount: "always",
    //         onSuccess: (d) => {
    //             if (d && !("error" in d) && d.room) {
    //                 setCurrentAnsId(() => d.room.id);
    //             }
    //         },
    //     }
    // );
    // const { push } = useRouter();

    // useEffect(() => {
    //     if (roomId) {
    //         setCurrentAnsId(roomId);
    //     }
    // }, [roomId, setCurrentAnsId]);

    // const errMsg = data && "error" in data ? data.error : "";
    // const noData = !data;

    // useEffect(() => {
    //     if (isLoading) {
    //         return;
    //     }
    //     if (noData) {
    //         setCurrentAnsId(null);

    //         // push("/");
    //         return;
    //     }
    //     if (errMsg) {
    //         setCurrentAnsId(null);

    //         console.log(errMsg, isLoading);
    //         showErrorToast(errMsg);
    //         // push("/");
    //     }
    // }, [noData, errMsg, isLoading, push, setCurrentAnsId]);

    return {
        data: {
            room: {
                creatorId: 432,
                name: "chor bazaar",
                description: "yaha pe chori kiya hua maal bikta hai",
            },
            users: [],
        },
        isLoading: false,
    };
};

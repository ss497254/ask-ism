import { useCallback } from "react";
import { useTypeSafeMutation } from "./useTypeSafeMutation";

export const useLeaveAns = () => {
    const { mutateAsync, isLoading } = useTypeSafeMutation("leaveAns");

    return {
        leaveAns: useCallback(() => {
            mutateAsync([]);
        }, [mutateAsync]),
        isLoading,
    };
};

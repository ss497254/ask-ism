import React from "react";
import { MainInnerGrid } from "../../ui/layout/MainGrid";
import { ErrorToast } from "../../ui/components/ErrorToast";
// import { useErrorToastStore } from "./useErrorToastStore";

export const ErrorToastController = ({}) => {
    // const { toasts, hideToast } = useErrorToastStore();
    return (
        <div
            style={{ zIndex: 1001 }}
            className={`flex w-full fixed bottom-0 justify-center`}
        >
            <MainInnerGrid>
                <div />
                <div className={`flex flex-col w-full`}>
                    {/* {toasts.map((t) => (
                        <div key={t.id} className={`flex mb-3`}>
                            <ErrorToast
                                message={t.message}
                                duration={t.duration}
                                onClose={() => hideToast(t.id)}
                            />
                        </div>
                    ))} */}
                </div>
                <div />
            </MainInnerGrid>
        </div>
    );
};

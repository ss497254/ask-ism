import { QueryClient } from "react-query";
import { showErrorToast } from "./showErrorToast";
import { defaultQueryFn } from "./defaultQueryFn";

export const queryClient = new QueryClient({
    defaultOptions: {
        mutations: {
            onError: (e) => {
                if ("message" in e) {
                    showErrorToast(e.message);
                }
            },
        },
        queries: {
            retry: false,
            staleTime: 60 * 10000 * 5,
            onError: (e) => {
                if ("message" in e) {
                    showErrorToast(e.message);
                }
            },
            queryFn: defaultQueryFn,
        },
    },
});

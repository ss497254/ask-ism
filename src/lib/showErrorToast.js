import { useErrorToastStore } from "../modules/errors/useErrorToastStore";

export const showErrorToast = (m) => {
  console.log("showErrorToast: ", m);
  useErrorToastStore.getState().showToast({ message: m });
};

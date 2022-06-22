import { useCurrentAnsIdStore } from "../global-stores/useCurrentAnsIdStore";

export const isCurrentAnsId = (id) =>
    id && id === useCurrentAnsIdStore.getState().currentAnsId;

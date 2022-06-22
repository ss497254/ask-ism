import create from "zustand";
import { combine } from "zustand/middleware";

export const useVoiceStore = create(
  combine({}, (set) => ({
    nullify: () => {},
    set,
  }))
);

import { create } from "zustand";

export const useThemeStore = create((set) => ({
  condition: "sunny",
  setCondition: (condition) => set({ condition })
}));

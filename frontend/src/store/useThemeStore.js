import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: null,
  setTheme: (theme) => set({ theme: theme }),
}));

export default useThemeStore;

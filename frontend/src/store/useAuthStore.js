import { create } from "zustand";

export const useAuthStore = create((set) => ({
  theme: null,
  setTheme: (theme) => set({ theme: theme }),
}));

export default useThemeStore;

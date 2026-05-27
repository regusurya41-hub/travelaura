import { create } from "zustand";

export const useUserStore = create((set) => ({
  user: null,
  token: localStorage.getItem("travelaura_token"),
  setSession: ({ user, token }) => {
    if (token) localStorage.setItem("travelaura_token", token);
    set({ user, token });
  },
  logout: () => {
    localStorage.removeItem("travelaura_token");
    set({ user: null, token: null });
  }
}));

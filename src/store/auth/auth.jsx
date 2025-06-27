import { persist, devtools } from "zustand/middleware";
import { create } from "zustand";

export const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        token: null,
        user: null,
        isLoggedIn: false,
        setAuth: ({ user, token }) => set({ user, token, isLoggedIn: true }),
        //   setUser: ({ user }) => set({ user, isLoggedIn: true }),
        setUser: ({ user }) => set({ user }),
        logout: () => ({ user: null, token: null, isLoggedIn: false }),
      }),
      {
        name: "auth-storage",
        partialize: (state) => ({
          token: state.token,
        }),
      }
    )
  )
);

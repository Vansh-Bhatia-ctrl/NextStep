import { create } from "zustand";

const useUserStore = create((set) => ({
  clerkUserId: null,
  name: null,
  email: null,
  onBoardingStatus: false,

  // actions
  setUser: (payload) =>
    set(() => ({
      clerkUserId: payload.clerkUserId ?? null,
      name: payload.name ?? null,
      email: payload.email ?? null,
      onBoardingStatus: payload.onBoardingStatus ?? false,
    })),

  clearUser: () =>
    set(() => ({
      clerkUserId: null,
      name: null,
      email: null,
      onBoardingStatus: false,
    })),
}));

export default useUserStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserDomain = create(
  persist(
    (set, get) => ({
      domain: null,
      loading: false,
      error: null,
      lastFetched: null,

      fetchDomain: async (token) => {
        const now = Date.now();
        const lastFetch = get().lastFetched;
        const CACHE_DURATION = 5 * 60 * 1000;

        if (lastFetch && now - lastFetch < CACHE_DURATION) {
          return get();
        }

        set({ loading: true, error: null });

        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/getlevel/user-level`,
            {
              method: "GET",
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (!response.ok) {
            throw new Error("Error fetching the domain.");
          }

          const data = await response.json();

          set({
            domain: data.domain,
            loading: false,
            lastFetched: now,
            error: null,
          });

          return data;
        } catch (err) {
          set({ error: err.message, loading: false });
          throw err;
        }
      },

      clearCache: () => {
        set({ domain: null, lastFetched: null, error: null });
      },
    }),
    {
      name: "user-domain",
      partialize: (state) => ({
        domain: state.domain,
        lastFetched: state.lastFetched,
      }),
    }
  )
);

export default useUserDomain;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clerkUserId: null,
  name: null,
  email: null,
  onBoardingStatus: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      (state.clerkUserId = action.payload.clerkUserId),
        (state.name = action.payload.name),
        (state.email = action.payload.email),
        (state.onBoardingStatus = action.payload.onBoardingStatus);
    },
    clearUser: (state) => {
      (state.clerkUserId = null),
        (state.name = null),
        (state.email = null),
        (state.onBoardingStatus = false);
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

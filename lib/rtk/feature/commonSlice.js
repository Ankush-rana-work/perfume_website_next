import { createSlice } from "@reduxjs/toolkit";


const commonSlice = createSlice({
  name: "commonStore",
  initialState: {
    common: null,
    showLoginModal: 0,
    lightUserCount: 0
  },
  reducers: {
    userData: (state, action) => {
      common.user = action.payload.data;
    },

  },
});

// this is for dispatch
export const { userData } = commonSlice.actions;

// this is for configureStore
export default commonSlice.reducer;
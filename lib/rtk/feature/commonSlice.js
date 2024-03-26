import { createSlice } from "@reduxjs/toolkit";


const commonSlice = createSlice({
  name: "commonStore",
  initialState: {
    common: null,
    showLoginModal: 0,
    lightUserCount: 0,
    cartCount: 0
  },
  reducers: {
    cartCount: (state, action) => {
      console.log(action);
      state.cartCount = action.payload;
    },
  },
});

// this is for dispatch
export const { cartCount } = commonSlice.actions;

// this is for configureStore
export default commonSlice.reducer;
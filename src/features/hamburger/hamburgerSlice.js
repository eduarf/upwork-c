import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    openHamburger: (state, action) => {
      state.isOpen = true;
      console.log(state.isOpen);
    },
    // eslint-disable-next-line no-unused-vars
    closeHamburger: (state, action) => {
      state.isOpen = false;
      console.log(state.isOpen);
      console.log(action.payload);
    },
  },
});

export const { openHamburger, closeHamburger } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;

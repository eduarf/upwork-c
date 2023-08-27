import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    hamburgerToggle: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { hamburgerToggle } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;

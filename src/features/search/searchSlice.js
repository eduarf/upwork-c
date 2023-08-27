import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    searchToggle: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { searchToggle } = searchSlice.actions;
export default searchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: false,
  reducers: {
    displayDrawer: (state) => !state,
  },
});

// Action creators are generated for each case reducer function
export const { displayDrawer, openDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;

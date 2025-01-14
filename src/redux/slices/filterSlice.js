import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "drawer",
  initialState: {
    range: [],
    categories: [],
  },
  reducers: {
    updateRange: (state, action) => {
      state.range = action.payload;
    },
    updateCategories: (state, action) => {
      const category = action.payload;
      if (state.categories.includes(category)) {
        state.categories = state.categories.filter((item) => item !== category);
      } else {
        state.categories.push(category);
      }
    },
    clearFilter: (state) => {
      state.range = [];
      state.categories = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateRange, updateCategories, clearFilter } =
  filterSlice.actions;

export default filterSlice.reducer;

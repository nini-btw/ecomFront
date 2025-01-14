import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./slices/drawerSlice";
import filterReducer from "./slices/filterSlice";
export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    filter: filterReducer,
  },
});

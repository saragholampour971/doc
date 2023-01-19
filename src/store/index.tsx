import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./search";

const store = configureStore({
  reducer: {
    search: SearchReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;

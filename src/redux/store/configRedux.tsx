import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { RootReducer } from "../rootReducer";

export const Userstore = configureStore({
  reducer: {
    root: RootReducer,
  },
});

setupListeners(Userstore.dispatch);
export type RootState = ReturnType<typeof Userstore.getState>;
export type AppDispatch = typeof Userstore.dispatch;

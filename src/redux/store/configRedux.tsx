"use client";

import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { RootReducer } from "../rootReducer";

/**
 * configuracion del store
 */
export const userStore = configureStore({
  reducer: {
    root: RootReducer,
  },
});

setupListeners(userStore.dispatch);
export type RootState = ReturnType<typeof userStore.getState>;
export type AppDispatch = typeof userStore.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

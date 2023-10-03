"use client";

import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { RootReducer } from "../rootReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root', // La clave bajo la cual se almacenará el estado
//   storage,     // El mecanismo de almacenamiento a utilizar (almacenamiento local en este caso)
// };

// const persistedReducer = persistReducer(persistConfig, RootReducer);
/**
 * configuracion del store
 */
export const userStore = configureStore({
  reducer: {
    root: RootReducer,
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});

// export const persistor = persistStore(userStore);

setupListeners(userStore.dispatch);
export type RootState = ReturnType<typeof userStore.getState>;
export type AppDispatch = typeof userStore.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

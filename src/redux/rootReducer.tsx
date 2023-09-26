"use client"
import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./features/login/slice";

export const RootReducer = combineReducers({
  userLogin: loginReducer,
});

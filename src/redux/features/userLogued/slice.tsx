"use client";

import { createSlice } from "@reduxjs/toolkit";
import { userLogued } from "./request";
import { initialStateUserLogued } from "./initialState";

/**
 * Slice userLogued
 */
const userLoguedSlice = createSlice({
  name: "logued",
  initialState: initialStateUserLogued,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogued.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(userLogued.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = undefined;
      state.success = true;
    });
    builder.addCase(userLogued.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.success = false;
    });
  },
});
export default userLoguedSlice.reducer;

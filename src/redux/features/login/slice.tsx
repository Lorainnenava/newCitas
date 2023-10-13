"use client";

import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./request";
import { initialStateUserLogin } from "./initialState";

/**
 * Slice userLoguin
 */
const userLoginSlice = createSlice({
  name: "login",
  initialState: initialStateUserLogin,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = undefined;
      state.success = true;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.success = false;
    });
  },
});
export default userLoginSlice.reducer;

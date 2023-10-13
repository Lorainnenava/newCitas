"use client";

import { createSlice } from "@reduxjs/toolkit";
import { userSession } from "./request";
import { initialStateUserSession } from "./initialState";

/**
 * Slice userSession
 */
const userSessionSlice = createSlice({
  name: "session",
  initialState: initialStateUserSession,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userSession.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(userSession.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = undefined;
      state.success = true;
    });
    builder.addCase(userSession.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.success = false;
    });
  },
});
export default userSessionSlice.reducer;
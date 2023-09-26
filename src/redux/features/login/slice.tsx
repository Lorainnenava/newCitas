"use client";

import { createSlice } from "@reduxjs/toolkit";
import { getUserChecked } from "./request";
import { UserLoginState } from "./types";

const initialState: UserLoginState = {
  loading: false,
  error: undefined,
  success: false,
  data: [],
};

const userLoginSlice = createSlice({
  name: "datas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserChecked.pending, (state) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getUserChecked.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = undefined;
      state.success= true
    });
    builder.addCase(getUserChecked.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.success= false

    });
  },
});
export default userLoginSlice.reducer;

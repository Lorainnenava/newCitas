'use client';

import { userGetAll } from './request';
import { initialState } from '../initialState';
import { createSlice } from '@reduxjs/toolkit';

/**
 * Slice userGetAll
 */
const userGetAllSlice = createSlice({
    name: 'GetAll',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userGetAll.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(userGetAll.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(userGetAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const userGetAllReducer = userGetAllSlice.reducer;

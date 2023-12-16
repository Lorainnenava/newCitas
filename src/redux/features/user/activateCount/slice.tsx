'use client';

import { activateCount } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateActivateCount } from './initialState';

/**
 * Slice activateCount
 */
const activateCountSlice = createSlice({
    name: 'activateCount',
    initialState: initialStateActivateCount,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(activateCount.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(activateCount.fulfilled, (state, action) => {
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(activateCount.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const activateCountReducer = activateCountSlice.reducer;

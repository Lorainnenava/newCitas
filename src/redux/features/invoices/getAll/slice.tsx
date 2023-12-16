'use client';

import { invoicesGetAll } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateInvoices } from '../initialState';

/**
 * InvoicesGetAllSlice
 */
const InvoicesGetAllSlice = createSlice({
    name: 'invoicesGetAll',
    initialState: initialStateInvoices,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(invoicesGetAll.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(invoicesGetAll.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(invoicesGetAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const InvoicesGetAllReducer = InvoicesGetAllSlice.reducer;

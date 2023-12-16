'use client';

import { invoicesUpdate } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateInvoices } from '../initialState';

/**
 * InvoicesUpdateSlice
 */
const InvoicesUpdateSlice = createSlice({
    name: 'invoicesUpdate',
    initialState: initialStateInvoices,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(invoicesUpdate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(invoicesUpdate.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(invoicesUpdate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const InvoicesUpdateReducer = InvoicesUpdateSlice.reducer;

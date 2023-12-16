'use client';

import { invoicesfindOne } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateInvoices } from '../initialState';

/**
 * InvoicesfindOneSlice
 */
const InvoicesfindOneSlice = createSlice({
    name: 'invoicesfindOne',
    initialState: initialStateInvoices,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(invoicesfindOne.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(invoicesfindOne.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(invoicesfindOne.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const InvoicesfindOneReducer = InvoicesfindOneSlice.reducer;

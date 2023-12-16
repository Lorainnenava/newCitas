'use client';

import { createSlice } from '@reduxjs/toolkit';
import { typeOfDocumentGetAll } from './request';
import { initialStateTypeOfDocument } from './initialState';

/**
 * TypeOfDocumentGetAllSlice
 */
const TypeOfDocumentGetAllSlice = createSlice({
    name: 'typeOfDocumentGetAll',
    initialState: initialStateTypeOfDocument,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(typeOfDocumentGetAll.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(typeOfDocumentGetAll.fulfilled, (state, action) => {
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(typeOfDocumentGetAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const TypeOfDocumentGetAllReducer = TypeOfDocumentGetAllSlice.reducer;

'use client';

import { rolesGetAll } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateTypeOfDocument } from './initialState';

/**
 * RolesGetAllSlice
 */
const RolesGetAllSlice = createSlice({
    name: 'rolesGetAll',
    initialState: initialStateTypeOfDocument,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(rolesGetAll.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(rolesGetAll.fulfilled, (state, action) => {
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(rolesGetAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const RolesGetAllReducer = RolesGetAllSlice.reducer;

'use client';

import { permissionsUpdate } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStatePermissions } from '../initialState';

/**
 * PermissionsUpdateSlice
 */
const PermissionsUpdateSlice = createSlice({
    name: 'permissionsUpdate',
    initialState: initialStatePermissions,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(permissionsUpdate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(permissionsUpdate.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(permissionsUpdate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const PermissionsUpdateReducer = PermissionsUpdateSlice.reducer;

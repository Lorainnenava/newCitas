'use client';

import { createSlice } from '@reduxjs/toolkit';
import { permissionsCreate } from './request';
import { initialStatePermissions } from '../initialState';

/**
 * PermissionsCreateSlice
 */
const PermissionsCreateSlice = createSlice({
    name: 'permissionsCreate',
    initialState: initialStatePermissions,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(permissionsCreate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(permissionsCreate.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(permissionsCreate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const PermissionsCreateReducer = PermissionsCreateSlice.reducer;

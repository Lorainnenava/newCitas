'use client';

import { createSlice } from '@reduxjs/toolkit';
import { permissionsGetAllByRole } from './request';
import { initialStatePermissions } from '../initialState';

/**
 * PermissionsGetAllByRoleSlice
 */
const PermissionsGetAllByRoleSlice = createSlice({
    name: 'permissionsGetAllByRole',
    initialState: initialStatePermissions,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(permissionsGetAllByRole.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(permissionsGetAllByRole.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(permissionsGetAllByRole.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const PermissionsGetAllByRoleReducer =
    PermissionsGetAllByRoleSlice.reducer;

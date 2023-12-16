'use client';

import { modulesGetAll } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateModules } from '../initialState';

/**
 * ModulesGetAllSlice
 */
const ModulesGetAllSlice = createSlice({
    name: 'modulesGetAll',
    initialState: initialStateModules,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(modulesGetAll.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(modulesGetAll.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(modulesGetAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const ModulesGetAllReducer = ModulesGetAllSlice.reducer;

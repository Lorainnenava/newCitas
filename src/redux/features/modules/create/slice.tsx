'use client';

import { modulesCreate } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateModules } from '../initialState';

/**
 * ModulesCreateSlice
 */
const ModulesCreateSlice = createSlice({
    name: 'modulesCreate',
    initialState: initialStateModules,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(modulesCreate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(modulesCreate.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(modulesCreate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const ModulesCreateReducer = ModulesCreateSlice.reducer;

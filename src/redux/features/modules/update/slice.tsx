'use client';

import { modulesUpdated } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateModules } from '../initialState';

/**
 * ModulesUpdateSlice
 */
const ModulesUpdateSlice = createSlice({
    name: 'modulesUpdated',
    initialState: initialStateModules,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(modulesUpdated.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(modulesUpdated.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(modulesUpdated.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const ModulesUpdateReducer = ModulesUpdateSlice.reducer;

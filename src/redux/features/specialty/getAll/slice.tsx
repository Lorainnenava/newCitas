'use client';

import { createSlice } from '@reduxjs/toolkit';
import { specialtyGetAll } from './request';
import { initialStateSpecialty } from './initialState';

/**
 * SpecialtyGetAllSlice
 */
const SpecialtyGetAllSlice = createSlice({
    name: 'specialtyGetAll',
    initialState: initialStateSpecialty,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(specialtyGetAll.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(specialtyGetAll.fulfilled, (state, action) => {
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(specialtyGetAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const SpecialtyGetAllReducer = SpecialtyGetAllSlice.reducer;

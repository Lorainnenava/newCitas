'use client';

import { doctorUpdate } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateDoctor } from '../initialState';

/**
 * DoctorUpdateSlice
 */
const DoctorUpdateSlice = createSlice({
    name: 'DoctorUpdate',
    initialState: initialStateDoctor,
    reducers: {
        reset: () => initialStateDoctor,
    },
    extraReducers: (builder) => {
        builder.addCase(doctorUpdate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(doctorUpdate.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(doctorUpdate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});

export const { reset } = DoctorUpdateSlice.actions;
export const DoctorUpdateReducer = DoctorUpdateSlice.reducer;

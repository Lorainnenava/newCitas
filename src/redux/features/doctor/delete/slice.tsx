'use client';

import { doctorDelete } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateDoctor } from '../initialState';

/**
 * DoctorDeleteSlice
 */
const DoctorDeleteSlice = createSlice({
    name: 'DoctorDelete',
    initialState: initialStateDoctor,
    reducers: {
        reset: () => initialStateDoctor,
    },
    extraReducers: (builder) => {
        builder.addCase(doctorDelete.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(doctorDelete.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(doctorDelete.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});

export const { reset } = DoctorDeleteSlice.actions;
export const DoctorDeleteReducer = DoctorDeleteSlice.reducer;

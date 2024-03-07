'use client';

import { doctorGetAll } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateDoctor } from '../initialState';

/**
 * DoctorGetAllSlice
 */
const DoctorGetAllSlice = createSlice({
    name: 'doctorGetAll',
    initialState: initialStateDoctor,
    reducers: {
        reset: () => initialStateDoctor,
    },
    extraReducers: (builder) => {
        builder.addCase(doctorGetAll.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(doctorGetAll.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(doctorGetAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});

export const { reset } = DoctorGetAllSlice.actions;
export const DoctorGetAllReducer = DoctorGetAllSlice.reducer;

'use client';

import { doctorCreate } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateDoctor } from '../initialState';

/**
 * DoctorCreateSlice
 */
const DoctorCreateSlice = createSlice({
    name: 'DoctorCreate',
    initialState: initialStateDoctor,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(doctorCreate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(doctorCreate.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(doctorCreate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const DoctorCreateReducer = DoctorCreateSlice.reducer;

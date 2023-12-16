'use client';

import { medicalAppointmentGetAll } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateMedicalAppointment } from '../initialState';

/**
 * MedicalAppointmentGetAllSlice
 */
const MedicalAppointmentGetAllSlice = createSlice({
    name: 'medicalAppointmentGetAll',
    initialState: initialStateMedicalAppointment,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(medicalAppointmentGetAll.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(medicalAppointmentGetAll.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(medicalAppointmentGetAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const MedicalAppointmentGetAllReducer =
    MedicalAppointmentGetAllSlice.reducer;

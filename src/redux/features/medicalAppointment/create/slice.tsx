'use client';

import { medicalAppointmentCreate } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateMedicalAppointment } from '../initialState';

/**
 * MedicalAppointmentCreateSlice
 */
const MedicalAppointmentCreateSlice = createSlice({
    name: 'medicalAppointmentCreate',
    initialState: initialStateMedicalAppointment,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(medicalAppointmentCreate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(medicalAppointmentCreate.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(medicalAppointmentCreate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const MedicalAppointmentCreateReducer =
    MedicalAppointmentCreateSlice.reducer;

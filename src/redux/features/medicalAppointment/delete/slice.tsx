'use client';

import { createSlice } from '@reduxjs/toolkit';
import { medicalAppointmentDelete } from './request';
import { initialStateMedicalAppointment } from '../initialState';

/**
 * MedicalAppointmentDeleteSlice
 */
const MedicalAppointmentDeleteSlice = createSlice({
    name: 'medicalAppointmentDelete',
    initialState: initialStateMedicalAppointment,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(medicalAppointmentDelete.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(medicalAppointmentDelete.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(medicalAppointmentDelete.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const MedicalAppointmentDeleteReducer =
    MedicalAppointmentDeleteSlice.reducer;

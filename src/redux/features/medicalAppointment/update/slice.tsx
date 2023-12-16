'use client';

import { createSlice } from '@reduxjs/toolkit';
import { medicalAppointmentUpdated } from './request';
import { initialStateMedicalAppointment } from '../initialState';

/**
 * MedicalAppointmentUpdatedSlice
 */
const MedicalAppointmentUpdatedSlice = createSlice({
    name: 'medicalAppointmentUpdated',
    initialState: initialStateMedicalAppointment,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(medicalAppointmentUpdated.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(
            medicalAppointmentUpdated.fulfilled,
            (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = undefined;
                state.success = true;
            }
        );
        builder.addCase(medicalAppointmentUpdated.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const MedicalAppointmentUpdatedReducer =
    MedicalAppointmentUpdatedSlice.reducer;

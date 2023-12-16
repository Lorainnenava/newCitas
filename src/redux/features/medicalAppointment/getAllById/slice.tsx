'use client';

import { createSlice } from '@reduxjs/toolkit';
import { medicalAppointmentGetAllById } from './request';
import { initialStateMedicalAppointment } from '../initialState';

/**
 * MedicalAppointmentGetAllByIdSlice
 */
const MedicalAppointmentGetAllByIdSlice = createSlice({
    name: 'medicalAppointmentGetAllById',
    initialState: initialStateMedicalAppointment,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(medicalAppointmentGetAllById.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(
            medicalAppointmentGetAllById.fulfilled,
            (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = undefined;
                state.success = true;
            }
        );
        builder.addCase(
            medicalAppointmentGetAllById.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
            }
        );
    },
});
export const MedicalAppointmentGetAllByIdReducer =
    MedicalAppointmentGetAllByIdSlice.reducer;

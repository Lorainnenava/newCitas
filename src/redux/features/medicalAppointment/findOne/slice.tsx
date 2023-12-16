'use client';

import { createSlice } from '@reduxjs/toolkit';
import { medicalAppointmentFindOne } from './request';
import { initialStateMedicalAppointment } from '../initialState';

/**
 * MedicalAppointmentFindOneSlice
 */
const MedicalAppointmentFindOneSlice = createSlice({
    name: 'medicalAppointmentFindOne',
    initialState: initialStateMedicalAppointment,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(medicalAppointmentFindOne.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(
            medicalAppointmentFindOne.fulfilled,
            (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = undefined;
                state.success = true;
            }
        );
        builder.addCase(medicalAppointmentFindOne.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const MedicalAppointmentFindOneReducer =
    MedicalAppointmentFindOneSlice.reducer;

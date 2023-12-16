'use client';

import { patientCreate } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStatePatient } from '../initialState';

/**
 * PatientCreateSlice
 */
const PatientCreateSlice = createSlice({
    name: 'patientCreate',
    initialState: initialStatePatient,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(patientCreate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(patientCreate.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(patientCreate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const PatientCreateReducer = PatientCreateSlice.reducer;

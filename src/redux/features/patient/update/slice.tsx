'use client';

import { patientUpdate } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStatePatient } from '../initialState';

/**
 * PatientUpdateSlice
 */
const PatientUpdateSlice = createSlice({
    name: 'patientUpdate',
    initialState: initialStatePatient,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(patientUpdate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(patientUpdate.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(patientUpdate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const PatientUpdateReducer = PatientUpdateSlice.reducer;

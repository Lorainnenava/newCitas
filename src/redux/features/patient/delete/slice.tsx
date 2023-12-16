'use client';

import { patientDelete } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStatePatient } from '../initialState';

/**
 * PatientDeleteSlice
 */
const PatientDeleteSlice = createSlice({
    name: 'patientDelete',
    initialState: initialStatePatient,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(patientDelete.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(patientDelete.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(patientDelete.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const PatientDeleteReducer = PatientDeleteSlice.reducer;

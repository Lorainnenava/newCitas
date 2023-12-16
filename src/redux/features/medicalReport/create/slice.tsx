'use client';

import { createSlice } from '@reduxjs/toolkit';
import { medicalReportCreate } from './request';
import { initialStateMedicalReport } from '../initialState';

/**
 * MedicalReportCreateSlice
 */
const MedicalReportCreateSlice = createSlice({
    name: 'medicalReportCreate',
    initialState: initialStateMedicalReport,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(medicalReportCreate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(medicalReportCreate.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(medicalReportCreate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const MedicalReportCreateReducer = MedicalReportCreateSlice.reducer;

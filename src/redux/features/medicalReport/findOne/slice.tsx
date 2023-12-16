'use client';

import { medicalReportFindOne } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateMedicalReport } from '../initialState';

/**
 * MedicalReportFindOneSlice
 */
const MedicalReportFindOneSlice = createSlice({
    name: 'medicalReportFindOne',
    initialState: initialStateMedicalReport,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(medicalReportFindOne.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(medicalReportFindOne.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(medicalReportFindOne.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const MedicalReportFindOneReducer = MedicalReportFindOneSlice.reducer;

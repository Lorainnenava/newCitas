'use client';

import { createSlice } from '@reduxjs/toolkit';
import { medicalHistoryUpdate } from './request';
import { initialStateMedicalHistory } from '../initialState';

/**
 * MedicalHistoryUpdateSlice
 */
const MedicalHistoryUpdateSlice = createSlice({
    name: 'medicalHistoryUpdate',
    initialState: initialStateMedicalHistory,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(medicalHistoryUpdate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(medicalHistoryUpdate.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(medicalHistoryUpdate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const MedicalHistoryUpdateReducer = MedicalHistoryUpdateSlice.reducer;

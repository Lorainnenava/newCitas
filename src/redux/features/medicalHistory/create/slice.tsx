'use client';

import { medicalHistoryCreate } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStateMedicalHistory } from '../initialState';

/**
 * MedicalHistoryCreateSlice
 */
const MedicalHistoryCreateSlice = createSlice({
    name: 'medicalHistoryCreate',
    initialState: initialStateMedicalHistory,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(medicalHistoryCreate.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(medicalHistoryCreate.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(medicalHistoryCreate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const MedicalHistoryCreateReducer = MedicalHistoryCreateSlice.reducer;

'use client';

import { createSlice } from '@reduxjs/toolkit';
import { medicalHistoryGetAll } from './request';
import { initialStateMedicalHistory } from '../initialState';

/**
 * MedicalHistoryGetAllSlice
 */
const MedicalHistoryGetAllSlice = createSlice({
    name: 'medicalHistoryGetAll',
    initialState: initialStateMedicalHistory,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(medicalHistoryGetAll.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(medicalHistoryGetAll.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(medicalHistoryGetAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const MedicalHistoryGetAllReducer = MedicalHistoryGetAllSlice.reducer;

'use client';

import { createSlice } from '@reduxjs/toolkit';
import { medicalHistoryFindOne } from './request';
import { initialStateMedicalHistory } from '../initialState';

/**
 * MedicalHistoryFindOneSlice
 */
const MedicalHistoryFindOneSlice = createSlice({
    name: 'medicalHistoryFindOne',
    initialState: initialStateMedicalHistory,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(medicalHistoryFindOne.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(medicalHistoryFindOne.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(medicalHistoryFindOne.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const MedicalHistoryFindOneReducer = MedicalHistoryFindOneSlice.reducer;

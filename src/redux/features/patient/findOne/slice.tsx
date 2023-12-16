'use client';

import { patientFindOne } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStatePatient } from '../initialState';

/**
 * PatientFindOneSlice
 */
const PatientFindOneSlice = createSlice({
    name: 'patientFindOne',
    initialState: initialStatePatient,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(patientFindOne.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(patientFindOne.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(patientFindOne.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const PatientFindOneReducer = PatientFindOneSlice.reducer;

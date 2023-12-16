'use client';

import { patientGetAll } from './request';
import { createSlice } from '@reduxjs/toolkit';
import { initialStatePatient } from '../initialState';

/**
 * PatientGetAllSlice
 */
const PatientGetAllSlice = createSlice({
    name: 'patientGetAll',
    initialState: initialStatePatient,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(patientGetAll.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(patientGetAll.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(patientGetAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const PatientGetAllReducer = PatientGetAllSlice.reducer;

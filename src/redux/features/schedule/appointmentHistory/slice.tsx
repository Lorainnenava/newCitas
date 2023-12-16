'use client';

import { createSlice } from '@reduxjs/toolkit';
import { scheduleAppointmentHistory } from './request';
import { initialStateSchedule } from '../initialState';

/**
 * ScheduleAppointmentHistorySlice
 */
const ScheduleAppointmentHistorySlice = createSlice({
    name: 'scheduleAppointmentHistory',
    initialState: initialStateSchedule,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(scheduleAppointmentHistory.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(
            scheduleAppointmentHistory.fulfilled,
            (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = undefined;
                state.success = true;
            }
        );
        builder.addCase(
            scheduleAppointmentHistory.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
            }
        );
    },
});
export const ScheduleAppointmentHistoryReducer =
    ScheduleAppointmentHistorySlice.reducer;

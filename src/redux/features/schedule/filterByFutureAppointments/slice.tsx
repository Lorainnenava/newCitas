'use client';

import { createSlice } from '@reduxjs/toolkit';
import { scheduleFilterByFutureAppointments } from './request';
import { initialStateSchedule } from '../initialState';

/**
 * ScheduleFilterByFutureAppointmentsSlice
 */
const ScheduleFilterByFutureAppointmentsSlice = createSlice({
    name: 'scheduleFilterByFutureAppointments',
    initialState: initialStateSchedule,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(scheduleFilterByFutureAppointments.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            scheduleFilterByFutureAppointments.fulfilled,
            (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.success = true;
            }
        );
        builder.addCase(
            scheduleFilterByFutureAppointments.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            }
        );
    },
});
export const ScheduleFilterByFutureAppointmentsReducer =
    ScheduleFilterByFutureAppointmentsSlice.reducer;

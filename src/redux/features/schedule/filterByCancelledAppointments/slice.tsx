'use client';

import { createSlice } from '@reduxjs/toolkit';
import { initialStateSchedule } from '../initialState';
import { scheduleFilterByCancelledAppointments } from './request';

/**
 * ScheduleFilterByCancelledAppointmentsSlice
 */
const ScheduleFilterByCancelledAppointmentsSlice = createSlice({
    name: 'scheduleFilterByCancelledAppointments',
    initialState: initialStateSchedule,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            scheduleFilterByCancelledAppointments.pending,
            (state) => {
                state.loading = true;
                state.error = undefined;
            }
        );
        builder.addCase(
            scheduleFilterByCancelledAppointments.fulfilled,
            (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = undefined;
                state.success = true;
            }
        );
        builder.addCase(
            scheduleFilterByCancelledAppointments.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
            }
        );
    },
});
export const ScheduleFilterByCancelledAppointmentsReducer =
    ScheduleFilterByCancelledAppointmentsSlice.reducer;

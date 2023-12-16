'use client';

import { createSlice } from '@reduxjs/toolkit';
import { scheduleFilterByDay } from './request';
import { initialStateSchedule } from '../initialState';

/**
 * ScheduleFilterByDaySlice
 */
const ScheduleFilterByDaySlice = createSlice({
    name: 'scheduleFilterByDay',
    initialState: initialStateSchedule,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(scheduleFilterByDay.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(scheduleFilterByDay.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(scheduleFilterByDay.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const ScheduleFilterByDayReducer = ScheduleFilterByDaySlice.reducer;

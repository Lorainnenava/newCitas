'use client';

import { userCreated } from './request';
import { initialState } from '../initialState';
import { createSlice } from '@reduxjs/toolkit';

/**
 * Slice userSignUp
 */
const userSignUpSlice = createSlice({
    name: 'signUp',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userCreated.pending, (state) => {
            state.loading = true;
            state.error = undefined;
        });
        builder.addCase(userCreated.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = undefined;
            state.success = true;
        });
        builder.addCase(userCreated.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
            state.success = false;
        });
    },
});
export const userSignUpSReducer = userSignUpSlice.reducer;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request scheduleFilterByDay
 */
export const scheduleFilterByDay = createAsyncThunk(
    '/schedule/filterByDay',
    async (request: object) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/schedule/filterByDay`,
                request,
                {
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

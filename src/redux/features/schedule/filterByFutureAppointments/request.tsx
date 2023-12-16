import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request scheduleFilterByFutureAppointments
 */
export const scheduleFilterByFutureAppointments = createAsyncThunk(
    '/schedule/futureAppointments',
    async () => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/schedule/futureAppointments`,
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

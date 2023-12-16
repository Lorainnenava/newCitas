import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request scheduleFilterByCancelledAppointments
 */
export const scheduleFilterByCancelledAppointments = createAsyncThunk(
    '/schedule/cancelledAppointments',
    async () => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/schedule/cancelledAppointments`,
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

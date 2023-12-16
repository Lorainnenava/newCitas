import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request scheduleAppointmentHistory
 */
export const scheduleAppointmentHistory = createAsyncThunk(
    '/schedule/appointmentHistory',
    async (request: object) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/schedule/appointmentHistory`,
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

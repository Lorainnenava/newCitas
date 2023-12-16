import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request medicalAppointmentGetAll
 */
export const medicalAppointmentGetAll = createAsyncThunk(
    '/medicalAppointment/getAll',
    async (token: string) => {
        try {
            const response = await axios.get(
                `${process.env.BASE_URL}/medicalAppointment/getAll`,
                {
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: token,
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

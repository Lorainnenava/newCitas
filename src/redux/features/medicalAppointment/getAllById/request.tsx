import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request medicalAppointmentGetAllById
 */
export const medicalAppointmentGetAllById = createAsyncThunk(
    '/medicalAppointment/getAllById',
    async (token: string) => {
        try {
            const response = await axios.get(
                `${process.env.BASE_URL}/medicalAppointment/getAllById`,
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

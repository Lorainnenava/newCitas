import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request medicalAppointmentCreate
 */
export const medicalAppointmentCreate = createAsyncThunk(
    '/medicalAppointment/create',
    async (token: string, request: Object) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/medicalAppointment/create`,
                request,
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

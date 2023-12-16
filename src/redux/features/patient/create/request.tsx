import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request patientCreate
 */
export const patientCreate = createAsyncThunk(
    '/patient/create',
    async (token: string, request: object) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/patient/create`,
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

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request patientGetAll
 */
export const patientGetAll = createAsyncThunk(
    '/patient/getAll',
    async (token: string) => {
        try {
            const response = await axios.get(
                `${process.env.BASE_URL}/patient/getAll`,
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

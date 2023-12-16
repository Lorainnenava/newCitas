import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request medicalHistoryGetAll
 */
export const medicalHistoryGetAll = createAsyncThunk(
    '/medicalHistory/getAll',
    async (token: string) => {
        try {
            const response = await axios.get(
                `${process.env.BASE_URL}/medicalHistory/getAll`,
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

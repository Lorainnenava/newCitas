import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request doctorGetAll
 */
export const doctorGetAll = createAsyncThunk(
    '/doctor/getAll',
    async (token: string) => {
        try {
            const response = await axios.get(
                `${process.env.BASE_URL}/doctor/getAll`,
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

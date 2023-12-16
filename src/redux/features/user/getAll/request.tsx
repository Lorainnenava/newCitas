import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request userGetAll
 */
export const userGetAll = createAsyncThunk(
    '/user/getAll',
    async (token: string) => {
        try {
            const response = await axios.get(
                `${process.env.BASE_URL}/user/getAll`,
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

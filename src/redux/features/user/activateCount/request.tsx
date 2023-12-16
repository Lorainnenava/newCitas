import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request activateCount
 */
export const activateCount = createAsyncThunk(
    '/activateCount',
    async (token: string) => {
        try {
            const response = await axios.put(
                `${process.env.BASE_URL}/user/activateCount/${token}`,
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

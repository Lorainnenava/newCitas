import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Request userSessión
 */
export const userSession = createAsyncThunk(
    '/usuario/userSession',
    async (token: string) => {
        try {
            const response = await axios.get(
                `${process.env.BASE_URL}/usuario/userSession`,
                {
                    headers: {
                        'Content-type': 'application/json',
                        authorization: token,
                    },
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

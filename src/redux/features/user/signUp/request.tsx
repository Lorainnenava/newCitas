import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request userCreated
 */
export const userCreated = createAsyncThunk(
    '/usuario/signUp',
    async (request: object) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/SignUp`,
                request,
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

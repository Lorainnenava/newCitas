import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Request userCreated
 */
export const userCreated = createAsyncThunk(
    '/usuario/signUp',
    async (dataForm: object) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/usuario/signUp`,
                dataForm,
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

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request modulesCreate
 */
export const modulesCreate = createAsyncThunk(
    '/modules/create',
    async (request: object) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/modules/create`,
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

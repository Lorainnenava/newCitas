import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request modulesUpdated
 */
export const modulesUpdated = createAsyncThunk(
    '/modules/update',
    async (_id: string, request: object) => {
        try {
            const response = await axios.put(
                `${process.env.BASE_URL}/modules/update/${_id}`,
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

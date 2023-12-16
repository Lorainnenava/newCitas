import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * specialtyGetAll
 */
export const specialtyGetAll = createAsyncThunk(
    '/specialty/getAll',
    async () => {
        try {
            const response = await axios.get(
                `${process.env.BASE_URL}/specialty/getAll`,
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

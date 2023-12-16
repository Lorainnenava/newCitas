import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request invoicesGetAll
 */
export const invoicesGetAll = createAsyncThunk(
    '/invoices/getAll',
    async (token: string) => {
        try {
            const response = await axios.get(
                `${process.env.BASE_URL}/invoices/getAll`,
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

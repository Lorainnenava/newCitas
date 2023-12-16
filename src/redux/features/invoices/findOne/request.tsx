import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request invoicesfindOne
 */
export const invoicesfindOne = createAsyncThunk(
    '/invoices/findOne',
    async (args: { _id: string; token: string }) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/invoices/${args._id}`,
                {
                    headers: {
                        'Content-type': 'application/json',
                        Authorization: args.token,
                    },
                }
            );

            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

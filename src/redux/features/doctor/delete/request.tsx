import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request doctorDelete
 */
export const doctorDelete = createAsyncThunk(
    '/doctor/delete',
    async (args: { token: string; _id: string }) => {
        try {
            const response = await axios.delete(
                `${process.env.BASE_URL}/doctor/delete/${args._id}`,
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

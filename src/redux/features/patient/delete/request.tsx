import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request patientDelete
 */
export const patientDelete = createAsyncThunk(
    '/patient/delete',
    async (args: { token: string; _id: string }) => {
        try {
            const response = await axios.delete(
                `${process.env.BASE_URL}/patient/delete/${args._id}`,
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

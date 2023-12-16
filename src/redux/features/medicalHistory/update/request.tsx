import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request medicalHistoryUpdate
 */
export const medicalHistoryUpdate = createAsyncThunk(
    '/medicalHistory/update',
    async (args: { _id: string; request: object; token: string }) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/medicalHistory/update/${args._id}`,
                args.request,
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

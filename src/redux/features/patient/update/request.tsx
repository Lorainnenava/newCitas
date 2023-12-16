import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request patientUpdate
 */
export const patientUpdate = createAsyncThunk(
    '/patient/update',
    async (args: { _id: string; request: object; token: string }) => {
        try {
            const response = await axios.put(
                `${process.env.BASE_URL}/patient/update/${args._id}`,
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

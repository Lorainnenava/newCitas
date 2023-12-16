import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request medicalHistoryFindOne
 */
export const medicalHistoryFindOne = createAsyncThunk(
    '/medicalHistory/findOne',
    async (args: { _id: string; token: string }) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/medicalHistory/${args._id}`,
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

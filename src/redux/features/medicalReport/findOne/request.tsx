import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request medicalReportFindOne
 */
export const medicalReportFindOne = createAsyncThunk(
    '/medicalReport/findOne',
    async (args: { token: string; _id: string }) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/medicalReport/${args._id}`,
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

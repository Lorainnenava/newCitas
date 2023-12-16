import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request medicalReportCreate
 */
export const medicalReportCreate = createAsyncThunk(
    '/medicalReport/create',
    async (token: string, request: object) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/medicalReport/create`,
                request,
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

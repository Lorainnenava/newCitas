import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request medicalAppointmentDelete
 */
export const medicalAppointmentDelete = createAsyncThunk(
    '/medicalAppointment/delete',
    async (args: { _id: string; token: string }) => {
        try {
            const response = await axios.delete(
                `${process.env.BASE_URL}/medicalAppointment/delete/${args._id}`,
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

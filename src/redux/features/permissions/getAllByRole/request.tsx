import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request permissionsGetAllByRole
 */
export const permissionsGetAllByRole = createAsyncThunk(
    '/permissions/getAllByRole',
    async (token: string, request: object) => {
        try {
            const response = await axios.post(
                `${process.env.BASE_URL}/permissions/getAllByRole`,
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

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/**
 * Request userLogued
 */
export const userLogued = createAsyncThunk(
    '/usuario/userLogued',
    async (token: string) => {
        try {
            const response = await axios.get(
                `${process.env.BASE_URL}/usuario/userLogueado`,
                {
                    headers: {
                        'Content-type': 'application/json',
                        authorization: token,
                    },
                }
            );
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

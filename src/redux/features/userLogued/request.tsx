import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request userLogued
 */
export const userLogued = createAsyncThunk(
    '/usuario/userLogued',
    async (token: string) => {
        try {
            const response = await fetch(
                `${process.env.BASE_URL}/usuario/userLogueado`,
                {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        authorization: token,
                    },
                }
            );
            if (!response.ok) {
                throw new Error('ha ocurrido algun error');
            }

            return response.json();
        } catch (error) {
            throw error;
        }
    }
);

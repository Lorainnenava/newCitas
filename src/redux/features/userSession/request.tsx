import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request userSessión
 */
export const userSession = createAsyncThunk(
    '/usuario/userSession',
    async (token: string) => {
        try {
            const response = await fetch(
                `${process.env.BASE_URL}/usuario/userSession`,
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

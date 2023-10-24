import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request userLoguin
 */
export const userLogin = createAsyncThunk(
    '/usuario/userLogin',
    async (dataForm: object) => {
        try {
            const response = await fetch(
                `${process.env.BASE_URL}/usuario`,

                {
                    method: 'PATCH',
                    body: JSON.stringify(dataForm),
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
            );

            if (!response.ok) {
                throw new Error('ha ocurrido algun error');
            }

            console.log(response.json(), 'gggg');

            return response.json();
        } catch (error) {
            throw error;
        }
    }
);

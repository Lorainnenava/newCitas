import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request userCreated
 */
export const userCreated = createAsyncThunk(
    '/usuario/signUp',
    async (dataForm: object) => {
        try {
            const response = await fetch(
                `${process.env.BASE_URL}/usuario/signUp`,

                {
                    method: 'POST',
                    body: JSON.stringify(dataForm),
                    headers: {
                        'Content-type': 'application/json',
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

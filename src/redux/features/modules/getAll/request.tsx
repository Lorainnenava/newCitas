import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request modulesGetAll
 */
export const modulesGetAll = createAsyncThunk('/modules/getAll', async () => {
    try {
        const response = await axios.get(
            `${process.env.BASE_URL}/modules/getAll`,
            {
                headers: {
                    'Content-type': 'application/json',
                },
            }
        );

        return response.data;
    } catch (error) {
        throw error;
    }
});

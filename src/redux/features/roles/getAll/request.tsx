import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * rolesGetAll
 */
export const rolesGetAll = createAsyncThunk('/roles/getAll', async () => {
    try {
        const response = await axios.get(
            `${process.env.BASE_URL}/roles/getAll`,
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

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Request modulesGetAll
 */
export const modulesGetAll = createAsyncThunk('module/getAll', async () => {
    try {
        const response = await axios.get(
            `http://localhost:5000/module/getAll`,
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

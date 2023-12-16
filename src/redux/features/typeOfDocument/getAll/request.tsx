import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * typeOfDocumentGetAll
 */
export const typeOfDocumentGetAll = createAsyncThunk(
    '/typeOfDocument/getAll',
    async () => {
        try {
            const response = await axios.get(
                `${process.env.BASE_URL}/typeOfDocument/getAll`,
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
    }
);

import { RolesState } from './types';

export const initialStateTypeOfDocument: RolesState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
        name: '',
    },
};

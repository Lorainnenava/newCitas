import { SpecialtyState } from './types';

export const initialStateSpecialty: SpecialtyState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
        name: '',
    },
};

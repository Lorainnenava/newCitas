import { UserState } from './types';

/**
 * State initial
 */
export const initialState: UserState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
        firstName: '',
        secondName: '',
        firstLastName: '',
        secondLastName: '',
        documentInfo: {
            typeOfDocument: '',
            documentNumber: 0,
        },
        dateOfBirth: '',
        gender: '',
        mobileNumber: 0,
        email: '',
        password: '',
        role: '',
        state: false,
    },
};

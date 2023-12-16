import { PatientState } from './types';

export const initialStatePatient: PatientState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
        firstName: '',
        secondName: '',
        firstLastName: '',
        secondLastName: '',
        documentInfo: {
            typeDocument: '',
            documentNumber: 0,
        },
        dateOfBirth: '',
        placeOfBirth: '',
        gender: '',
        age: 0,
        mobileNumber: 0,
        email: '',
        address: {
            address: '',
            placeOfResidence: '',
        },
        regimen: '',
        state: true,
    },
};

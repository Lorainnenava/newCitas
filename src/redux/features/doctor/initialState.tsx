import { DoctorState } from './types';

export const initialStateDoctor: DoctorState = {
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
        specialty: '',
    },
};

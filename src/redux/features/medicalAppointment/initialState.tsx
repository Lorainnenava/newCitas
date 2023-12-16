import { MedicalAppointmentState } from './types';

export const initialStateMedicalAppointment: MedicalAppointmentState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
        userInfo: {
            firstName: '',
            secondName: '',
            firstLastName: '',
            secondLastName: '',
            gender: '',
            email: '',
            age: 0,
            documentInfo: {
                typeDocument: '',
                documentNumber: 0,
            },
            state: true,
        },
        timeAppointment: '',
        doctor: {
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
        date: '',
        cancelled: true,
        state: true,
    },
};

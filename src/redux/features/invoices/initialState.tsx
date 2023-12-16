import { InvoicesState } from './types';

export const initialStateInvoices: InvoicesState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
        code: 0,
        description: '',
        patientInformation: {
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
        _idMedicalAppointment: '',
        date: '',
        cost: 0,
        paid: true,
        state: true,
    },
};

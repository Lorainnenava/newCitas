import { ScheduleState } from './types';

export const initialStateSchedule: ScheduleState = {
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
            state: false,
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
        cancelled: false,
        state: false,
    },
};

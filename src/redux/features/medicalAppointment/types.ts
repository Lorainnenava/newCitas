export interface MedicalAppointmentState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
        userInfo: {
            firstName: string;
            secondName: string;
            firstLastName: string;
            secondLastName: string;
            gender: string;
            email: string;
            age: number;
            documentInfo: {
                typeDocument: string;
                documentNumber: number;
            };
            state: boolean;
        };
        timeAppointment: string;
        doctor: {
            firstName: string;
            secondName: string;
            firstLastName: string;
            secondLastName: string;
            documentInfo: {
                typeDocument: string;
                documentNumber: number;
            };
            specialty: string;
        };
        date: string;
        cancelled: boolean;
        state: boolean;
    };
}

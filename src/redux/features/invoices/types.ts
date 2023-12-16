export interface InvoicesState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
        code: number;
        description: string;
        patientInformation: {
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
            state: true;
        };
        _idMedicalAppointment: string;
        date: string;
        cost: number;
        paid: true;
        state: true;
    };
}

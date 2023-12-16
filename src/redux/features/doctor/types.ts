export interface DoctorState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
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
}

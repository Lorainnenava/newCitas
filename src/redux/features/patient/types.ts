export interface PatientState {
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
        dateOfBirth: string;
        placeOfBirth: string;
        gender: string;
        age: number;
        mobileNumber: number;
        email: string;
        address: {
            address: string;
            placeOfResidence: string;
        };
        regimen: string;
        state: true;
    };
}

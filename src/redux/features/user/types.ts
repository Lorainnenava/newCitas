export interface UserState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
        firstName: string;
        secondName?: string;
        firstLastName: string;
        secondLastName?: string;
        documentInfo: {
            typeOfDocument: string;
            documentNumber: number;
        };
        dateOfBirth: string;
        gender: string;
        mobileNumber: number;
        email: string;
        password: string;
        role?: string;
        state?: boolean;
    };
}

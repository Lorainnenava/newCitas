export interface MedicalHistoryState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
        informationPatient: {
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
            state: boolean;
        };
        medicalInformation: {
            allergies: boolean;
            surgeries: boolean;
            infoSurgeries: string;
            bloodType: string;
            illnesses: string;
            takeMedication: boolean;
            infoTakeMedication: string;
            useDrugs: boolean;
            useTobacco: boolean;
            observations: string;
        };
        familyHistory: {
            Depression: boolean;
            Asthma: boolean;
            Arthritis: boolean;
            Tuberculosis: boolean;
            Diabetes: boolean;
            Cancer: boolean;
            heartProblems: boolean;
        };
        weight: number;
        height: number;
    };
}

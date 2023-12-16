import { MedicalHistoryState } from './types';

export const initialStateMedicalHistory: MedicalHistoryState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
        informationPatient: {
            firstName: '',
            secondName: '',
            firstLastName: '',
            secondLastName: '',
            documentInfo: {
                typeDocument: '',
                documentNumber: 0,
            },
            dateOfBirth: '',
            placeOfBirth: '',
            gender: '',
            age: 0,
            mobileNumber: 0,
            email: '',
            address: {
                address: '',
                placeOfResidence: '',
            },
            regimen: '',
            state: false,
        },
        medicalInformation: {
            allergies: false,
            surgeries: false,
            infoSurgeries: '',
            bloodType: '',
            illnesses: '',
            takeMedication: false,
            infoTakeMedication: '',
            useDrugs: false,
            useTobacco: false,
            observations: '',
        },
        familyHistory: {
            Depression: false,
            Asthma: false,
            Arthritis: false,
            Tuberculosis: false,
            Diabetes: false,
            Cancer: false,
            heartProblems: false,
        },
        weight: 0,
        height: 0,
    },
};

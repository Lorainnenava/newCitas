import { MedicalReportState } from './types';

export const initialStateMedicalReport: MedicalReportState = {
    loading: false,
    error: undefined,
    success: false,
    data: {
        patientFisrtName: '',
        patientSecondName: '',
        patientFirstLastName: '',
        patientSecondLastName: '',
        gender: '',
        age: 0,
        documentInfo: {
            typeDocument: '',
            documentNumber: 0,
        },
        reasonForVisit: '',
        physicalExam: '',
        treatment: {
            medicine: '',
            description: '',
        },
    },
};

export interface MedicalReportState {
    loading: boolean;
    error: string | undefined;
    success: boolean;
    data: {
        patientFisrtName: string;
        patientSecondName: string;
        patientFirstLastName: string;
        patientSecondLastName: string;
        gender: string;
        age: number;
        documentInfo: {
            typeDocument: string;
            documentNumber: number;
        };
        reasonForVisit: string;
        physicalExam: string;
        treatment: {
            medicine: string;
            description: string;
        };
    };
}

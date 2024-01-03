import { PatientResponseDto } from '../../../../../application/dtos/patients/response/patient/patientResponse.dto';

export interface IPatientGetAllService {
  /**
   * getAll patient
   */
  getAll(): Promise<PatientResponseDto[]>;
}

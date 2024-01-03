import { PatientResponseDto } from '../../../../../application/dtos/patients/response/patient/patientResponse.dto';

export interface IPatientFindByIdService {
  /**
   * findById patient
   * @param _id
   */
  findById(_id: string): Promise<PatientResponseDto>;
}

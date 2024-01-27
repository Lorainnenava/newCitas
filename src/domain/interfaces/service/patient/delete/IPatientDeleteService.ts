import { PatientResponseDto } from '../../../../dtos/patient/response/patient/patientResponse.dto';

export interface IPatientDeleteService {
  /**
   * delete patient
   * @param _id
   */
  delete(_id: string): Promise<PatientResponseDto>;
}

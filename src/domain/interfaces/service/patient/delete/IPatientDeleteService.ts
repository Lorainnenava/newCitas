import { PatientResponseDto } from '../../../../entities/patient/dto/response/patient/patientResponse.dto';

export interface IPatientDeleteService {
  /**
   * delete patient
   * @param _id
   */
  delete(_id: string): Promise<PatientResponseDto>;
}

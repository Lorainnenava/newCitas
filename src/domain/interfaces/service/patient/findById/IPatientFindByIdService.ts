import { PatientResponseDto } from '../../../../dtos/patient/response/patient/patientResponse.dto';

export interface IPatientFindByIdService {
  /**
   * findById patient
   * @param _id
   */
  findById(_id: string): Promise<PatientResponseDto>;
}

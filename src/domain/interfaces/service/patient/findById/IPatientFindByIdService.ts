import { PatientResponseDto } from '../../../../entities/patient/dto/response/patient/patientResponse.dto';

export interface IPatientFindByIdService {
  /**
   * findById patient
   * @param _id
   */
  findById(_id: string): Promise<PatientResponseDto>;
}

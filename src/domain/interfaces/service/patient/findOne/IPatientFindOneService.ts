import { PatientResponseDto } from "../../../../dtos/patient/response/patient/patientResponse.dto";

export interface IPatientFindOneService {
  /**
   * findOne patient
   * @param _id
   */
  findOne(documentNumber: number): Promise<PatientResponseDto>;
}

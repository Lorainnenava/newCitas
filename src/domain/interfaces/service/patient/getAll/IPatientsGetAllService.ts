import { PatientResponseDto } from "../../../../dtos/patient/response/patient/patientResponse.dto";

export interface IPatientsGetAllService {
  /**
   * getAll patients
   */
  getAll(): Promise<PatientResponseDto[]>;
}

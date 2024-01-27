import { PatientRequestDto } from "../../../../dtos/patient/request/patient/patientRequest.dto";
import { PatientResponseDto } from "../../../../dtos/patient/response/patient/patientResponse.dto";

export interface IPatientCreateService {
  /**
   * create patient
   * @param request
   */
  create(request: PatientRequestDto): Promise<PatientResponseDto>;
}

import { PatientRequestDto } from "../../../../dtos/patient/request/patient/patientRequest.dto";
import { PatientResponseDto } from "../../../../dtos/patient/response/patient/patientResponse.dto";

export interface IPatientUpdateService {
  /**
   * update patient
   * @param request
   */
  update(request: PatientRequestDto): Promise<PatientResponseDto>;
}

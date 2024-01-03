import { PatientRequestDto } from '../../../../../application/dtos/patients/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../../../application/dtos/patients/response/patient/patientResponse.dto';

export interface IPatientCreateService {
  /**
   * create patient
   * @param request
   */
  create(request: PatientRequestDto): Promise<PatientResponseDto>;
}

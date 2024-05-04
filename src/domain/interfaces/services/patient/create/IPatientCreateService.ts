import { PatientRequestDto } from '../../../../entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../../entities/patient/dto/response/patient/patientResponse.dto';

export interface IPatientCreateService {
  /**
   * create patient
   * @param request
   */
  create(request: PatientRequestDto): Promise<PatientResponseDto>;
}

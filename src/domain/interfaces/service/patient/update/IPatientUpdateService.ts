import { PatientRequestDto } from '../../../../entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../../entities/patient/dto/response/patient/patientResponse.dto';

export interface IPatientUpdateService {
  /**
   * update patient
   * @param request
   */
  update(request: PatientRequestDto): Promise<PatientResponseDto>;
}

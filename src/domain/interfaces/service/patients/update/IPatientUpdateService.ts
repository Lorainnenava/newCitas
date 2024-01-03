import { PatientRequestDto } from '../../../../../application/dtos/patients/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../../../application/dtos/patients/response/patient/patientResponse.dto';

export interface IPatientUpdateService {
  /**
   * update patient
   * @param request
   * @param _id
   */
  update(request: PatientRequestDto, _id: string): Promise<PatientResponseDto>;
}

import { PatientResponseDto } from '../../../../entities/patient/dto/response/patient/patientResponse.dto';

export interface IPatientsGetAllService {
  /**
   * getAll patients
   */
  getAll(): Promise<PatientResponseDto[]>;
}

import { RequestUser } from '../../../utils/types';
import { PatientRequestDto } from '../../collections/patients/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../collections/patients/dto/response/patient/patientResponse.dto';

export interface IPatientApplication {
  /**
   * create patient
   * @param request
   */
  create(
    requestPatient: PatientRequestDto,
    user: RequestUser,
  ): Promise<PatientResponseDto>;

  /**
   * findById patient
   * @param _id
   */
  findById?(_id: string): Promise<PatientResponseDto>;

  /**
   * update patient
   * @param request
   * @param _id
   */
  update?(request: PatientRequestDto, _id: string): Promise<PatientResponseDto>;

  /**
   * delete patient
   * @param _id
   */
  delete?(_id: string): Promise<boolean>;

  /**
   * getAll patient
   */
  getAll?(): Promise<PatientResponseDto[]>;
}

import { PatientRequestDto } from '../../../../application/dtos/patients/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../../application/dtos/patients/response/patient/patientResponse.dto';

export interface IPatientRepository {
  /**
   * create patient
   * @param request
   */
  create(request: PatientRequestDto): Promise<PatientResponseDto>;

  /**
   * findById patient
   * @param _id
   */
  findById(_id: string): Promise<PatientResponseDto>;

  /**
   * findOne patient
   * @param _id
   */
  findOne(documentNumber: number): Promise<PatientResponseDto>;

  /**
   * update patient
   * @param request
   * @param _id
   */
  update(request: PatientRequestDto, _id: string): Promise<PatientResponseDto>;

  /**
   * delete patient
   * @param _id
   */
  delete(_id: string): Promise<boolean>;

  /**
   * getAll patient
   */
  getAll(): Promise<PatientResponseDto[]>;
}

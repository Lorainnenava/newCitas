import { PatientRequestDto } from '../../../entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../entities/patient/dto/response/patient/patientResponse.dto';

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
   */
  update(request: PatientRequestDto): Promise<PatientResponseDto>;

  /**
   * delete patient
   * @param _id
   */
  delete(_id: string): Promise<PatientResponseDto>;

  /**
   * getAll patients
   */
  getAll(): Promise<PatientResponseDto[]>;
}

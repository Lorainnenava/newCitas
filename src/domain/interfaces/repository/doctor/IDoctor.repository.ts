import { DoctorRequestDto } from '../../../dtos/doctor/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../dtos/doctor/response/doctorResponse.dto';

export interface IDoctorRepository {
  /**
   * create doctor
   * @param request
   */
  create(request: DoctorRequestDto): Promise<DoctorResponseDto>;

  /**
   * getAll doctors
   */
  getAll(): Promise<DoctorResponseDto[]>;

  /**
   * findOne doctor
   * @param documentNumber
   */
  findOne(documentNumber: number): Promise<DoctorResponseDto>;

  /**
   * update doctor
   * @param request
   * @param _id
   */
  update(request: DoctorRequestDto): Promise<DoctorResponseDto>;

  /**
   * delete doctor
   * @param _id
   */
  delete(_id: string): Promise<DoctorResponseDto>;
}

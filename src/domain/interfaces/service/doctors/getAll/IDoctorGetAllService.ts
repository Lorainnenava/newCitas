import { DoctorResponseDto } from '../../../../../application/dtos/doctor/response/doctorResponse.dto';

export interface IDoctorGetAllService {
  /**
   * getAll doctors
   */
  getAll(): Promise<DoctorResponseDto[]>;
}

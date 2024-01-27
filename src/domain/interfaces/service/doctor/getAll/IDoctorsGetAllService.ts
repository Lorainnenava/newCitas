import { DoctorResponseDto } from '../../../../dtos/doctor/response/doctorResponse.dto';

export interface IDoctorsGetAllService {
  /**
   * getAll doctors
   */
  getAll(): Promise<DoctorResponseDto[]>;
}

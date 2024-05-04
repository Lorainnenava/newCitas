import { DoctorResponseDto } from '../../../../entities/doctor/dto/response/doctorResponse.dto';

export interface IDoctorsGetAllService {
  /**
   * getAll doctors
   */
  getAll(): Promise<DoctorResponseDto[]>;
}

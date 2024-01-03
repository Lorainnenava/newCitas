import { DoctorRequestDto } from '../../../../../application/dtos/doctor/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../../../application/dtos/doctor/response/doctorResponse.dto';

export interface IDoctorCreateService {
  /**
   * create doctor
   * @param request
   */
  create(request: DoctorRequestDto): Promise<DoctorResponseDto>;
}

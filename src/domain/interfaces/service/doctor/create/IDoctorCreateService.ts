import { DoctorResponseDto } from '../../../../dtos/doctor/response/doctorResponse.dto';
import { DoctorRequestDto } from '../../../../dtos/doctor/request/doctorRequest.dto';

export interface IDoctorCreateService {
  /**
   * create doctor
   * @param request
   */
  create(request: DoctorRequestDto): Promise<DoctorResponseDto>;
}

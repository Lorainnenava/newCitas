import { DoctorRequestDto } from '../../../../entities/doctor/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../../entities/doctor/dto/response/doctorResponse.dto';

export interface IDoctorCreateService {
  /**
   * create doctor
   * @param request
   */
  create(request: DoctorRequestDto): Promise<DoctorResponseDto>;
}

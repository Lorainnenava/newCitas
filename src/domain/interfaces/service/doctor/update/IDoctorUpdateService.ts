import { DoctorRequestDto } from '../../../../dtos/doctor/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../../dtos/doctor/response/doctorResponse.dto';

export interface IDoctorUpdateService {
  /**
   * update doctor
   * @param request
   * @param _id
   */
  update(request: DoctorRequestDto): Promise<DoctorResponseDto>;
}

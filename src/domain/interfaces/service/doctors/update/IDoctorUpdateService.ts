import { DoctorRequestDto } from '../../../../../application/dtos/doctor/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../../../application/dtos/doctor/response/doctorResponse.dto';

export interface IDoctorUpdateService {
  /**
   * update doctor
   * @param request
   * @param _id
   */
  update(request: DoctorRequestDto, _id: string): Promise<DoctorResponseDto>;
}

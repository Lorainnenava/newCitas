import { DoctorRequestDto } from '../../../../entities/doctor/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../../entities/doctor/dto/response/doctorResponse.dto';

export interface IDoctorUpdateService {
  /**
   * update doctor
   * @param _id
   * @param request
   */
  update(_id: string, request: DoctorRequestDto): Promise<DoctorResponseDto>;
}

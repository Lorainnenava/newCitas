import { ObjectId } from 'mongoose';
import { DoctorRequestDto } from '../../../../entities/doctor/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../../entities/doctor/dto/response/doctorResponse.dto';

export interface IDoctorUpdateService {
  /**
   * Update doctor
   * @param _id
   * @param request
   */
  update(_id: ObjectId, request: DoctorRequestDto): Promise<DoctorResponseDto>;
}

import { DoctorResponseDto } from '../../../../dtos/doctor/response/doctorResponse.dto';

export interface IDoctorDeleteService {
  /**
   * delete doctor
   * @param _id
   */
  delete(_id: string): Promise<DoctorResponseDto>;
}

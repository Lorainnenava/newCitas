import { DoctorResponseDto } from '../../../../entities/doctor/dto/response/doctorResponse.dto';

export interface IDoctorDeleteService {
  /**
   * delete doctor
   * @param _id
   */
  delete(_id: string): Promise<DoctorResponseDto>;
}

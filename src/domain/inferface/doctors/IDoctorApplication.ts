import { DoctorRequestDto } from '../../collections/doctors/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../collections/doctors/dto/response/doctorResponse.dto';

export interface IDoctorApplication {
  /**
   * create doctor
   * @param request
   */
  create(request: DoctorRequestDto): Promise<DoctorResponseDto>;

  /**
   * getAll users
   */
  getAll(): Promise<DoctorResponseDto[]>;

  /**
   * delete doctor
   * @param _id
   */
  delete(_id: string): Promise<DoctorResponseDto>;
}

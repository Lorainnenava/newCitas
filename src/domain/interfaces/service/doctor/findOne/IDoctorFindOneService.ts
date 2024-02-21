import { DoctorResponseDto } from '../../../../entities/doctor/dto/response/doctorResponse.dto';

export interface IDoctorFindOneService {
  /**
   * findOne doctor
   * @param documentNumber
   */
  findOne(documentNumber: number): Promise<DoctorResponseDto>;
}

import { DoctorResponseDto } from "../../../../../application/dtos/doctor/response/doctorResponse.dto";


export interface IDoctorFindOneService {
  /**
   * findOne doctor
   * @param documentNumber
   */
  findOne(documentNumber: number): Promise<DoctorResponseDto>;
}

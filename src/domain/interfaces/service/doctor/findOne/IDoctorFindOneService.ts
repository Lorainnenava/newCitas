import { DoctorResponseDto } from "../../../../dtos/doctor/response/doctorResponse.dto";


export interface IDoctorFindOneService {
  /**
   * findOne doctor
   * @param documentNumber
   */
  findOne(documentNumber: number): Promise<DoctorResponseDto>;
}

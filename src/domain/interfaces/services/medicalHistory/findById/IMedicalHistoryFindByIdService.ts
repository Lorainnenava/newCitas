import { MedicalHistoryResponseDto } from '../../../../entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

export interface IMedicalHistoryFindByIdService {
  /**
   * findById medicalHistory
   * @param request
   * @param _id
   */

  findById(_id: string): Promise<MedicalHistoryResponseDto>;
}

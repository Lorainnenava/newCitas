import { MedicalHistoryRequestDto } from '../../../../../application/dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../../../application/dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';

/**
 * IMedicalHistoryUpdateService
 */
export interface IMedicalHistoryUpdateService {
  /**
   * update medicalHistory
   * @param request
   * @param _id
   */
  update(
    request: MedicalHistoryRequestDto,
    _id: string,
  ): Promise<MedicalHistoryResponseDto>;
}

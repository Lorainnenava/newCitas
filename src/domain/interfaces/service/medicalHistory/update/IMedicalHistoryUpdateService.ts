import { MedicalHistoryRequestDto } from '../../../../dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../../dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';

/**
 * IMedicalHistoryUpdateService
 */
export interface IMedicalHistoryUpdateService {
  /**
   * update medicalHistory
   * @param request
   */
  update(request: MedicalHistoryRequestDto): Promise<MedicalHistoryResponseDto>;
}

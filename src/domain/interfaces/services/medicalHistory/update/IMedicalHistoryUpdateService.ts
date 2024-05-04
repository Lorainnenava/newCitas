import { MedicalHistoryRequestDto } from '../../../../entities/medicalHistory/dto/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../../entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

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

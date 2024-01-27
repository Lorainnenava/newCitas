import { MedicalHistoryRequestDto } from '../../../../dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../../dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';

/**
 * IMedicalHistoryCreateService
 */
export interface IMedicalHistoryCreateService {
  /**
   * create medicalHistory
   * @param request
   */
  create(request: MedicalHistoryRequestDto): Promise<MedicalHistoryResponseDto>;
}

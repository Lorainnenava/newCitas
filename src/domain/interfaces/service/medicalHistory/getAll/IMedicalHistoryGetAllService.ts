import { MedicalHistoryResponseDto } from '../../../../../application/dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';

/**
 * IMedicalHistoryGetAllService
 */
export interface IMedicalHistoryGetAllService {
  /**
   * getAll medicalHistories
   */
  getAll(): Promise<MedicalHistoryResponseDto[]>;
}

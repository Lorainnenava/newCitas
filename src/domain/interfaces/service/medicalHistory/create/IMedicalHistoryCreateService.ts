import { MedicalHistoryRequestDto } from '../../../../../application/dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';

/**
 * IMedicalHistoryCreateService
 */
export interface IMedicalHistoryCreateService {
  /**
   * create medicalHistory
   * @param request
   */
  create(request: MedicalHistoryRequestDto): Promise<object>;
}

import { MedicalHistoryRequestDto } from '../../../dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';

export interface IMedicalHistoryRepository {
  /**
   * create medicalHistory
   * @param request
   */
  create(request: MedicalHistoryRequestDto): Promise<MedicalHistoryResponseDto>;

  /**
   * getAll medicalHistories
   */
  getAll(): Promise<MedicalHistoryResponseDto[]>;

  /**
   * findById medicalHistory
   * @param _id
   */

  findById(_id: string): Promise<MedicalHistoryResponseDto>;

  /**
   * update medicalHistory
   * @param request
   */
  update(request: MedicalHistoryRequestDto): Promise<MedicalHistoryResponseDto>;
}

import { MedicalHistoryRequestDto } from '../../../../application/dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../../application/dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';

/**
 * IMedicalHistoryRepository
 */
export interface IMedicalHistoryRepository {
  /**
   * create medicalHistory
   * @param request
   */
  create(request: MedicalHistoryRequestDto): Promise<object>;

  /**
   * getAll medicalHistories
   */
  getAll(): Promise<MedicalHistoryResponseDto[]>;

  /**
   * findById medicalHistory
   * @param request
   * @param _id
   */

  findById(_id: string): Promise<object>;

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

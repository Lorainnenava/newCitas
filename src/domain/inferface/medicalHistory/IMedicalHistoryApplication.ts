import { MedicalHistoryRequestDto } from '../../collections/medicalHistory/dto/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../collections/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

/**
 * IMedicalHistoryApplication
 */
export interface IMedicalHistoryApplication {
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

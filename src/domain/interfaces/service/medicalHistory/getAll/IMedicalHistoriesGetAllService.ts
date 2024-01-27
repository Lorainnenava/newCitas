import { MedicalHistoryResponseDto } from '../../../../dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';

export interface IMedicalHistoriesGetAllService {
  /**
   * getAll medicalHistories
   */
  getAll(): Promise<MedicalHistoryResponseDto[]>;
}

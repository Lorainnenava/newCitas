import { MedicalHistoryResponseDto } from '../../../../entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

export interface IMedicalHistoriesGetAllService {
  /**
   * getAll medicalHistories
   */
  getAll(): Promise<MedicalHistoryResponseDto[]>;
}

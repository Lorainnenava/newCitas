import { Injectable } from '@nestjs/common';
import { MedicalHistoryRepository } from '../../../../infrastructure/repository/medicalHistory/medicalHistory.repository';
import { IMedicalHistoriesGetAllService } from '../../../../domain/interfaces/service/medicalHistory/getAll/IMedicalHistoriesGetAllService';
import { MedicalHistoryResponseDto } from '../../../../domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

@Injectable()
export class MedicalHistoriesGetAllService
  implements IMedicalHistoriesGetAllService
{
  constructor(
    private readonly medicalHistoryRepository: MedicalHistoryRepository,
  ) {}

  /**
   * getAll medicalHistory
   * @returns
   */
  async getAll(): Promise<MedicalHistoryResponseDto[]> {
    try {
      return await this.medicalHistoryRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}

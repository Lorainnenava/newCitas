import { Inject, Injectable } from '@nestjs/common';
import { MedicalHistoryResponseDto } from 'src/domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';
import { IMedicalHistoryRepository } from 'src/domain/interfaces/infrastructure/medicalHistory/IMedicalHistory.repository';
import { IMedicalHistoriesGetAllService } from 'src/domain/interfaces/services/medicalHistory/getAll/IMedicalHistoriesGetAllService';

@Injectable()
export class MedicalHistoriesGetAllService
  implements IMedicalHistoriesGetAllService
{
  constructor(
    @Inject('MedicalHistoryRepository')
    private readonly _medicalHistoryRepository: IMedicalHistoryRepository,
  ) {}

  /**
   * getAll medicalHistory
   * @returns
   */
  async getAll(): Promise<MedicalHistoryResponseDto[]> {
    try {
      return await this._medicalHistoryRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}

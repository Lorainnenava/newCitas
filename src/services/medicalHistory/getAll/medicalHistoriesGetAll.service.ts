import { Inject, Injectable } from '@nestjs/common';
import { IMedicalHistoryRepository } from '../../../../domain/interfaces/repository/medicalHistory/IMedicalHistory.repository';
import { IMedicalHistoriesGetAllService } from '../../../../domain/interfaces/service/medicalHistory/getAll/IMedicalHistoriesGetAllService';
import { MedicalHistoryResponseDto } from '../../../../domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

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

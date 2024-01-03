import { Injectable } from '@nestjs/common';
import { MedicalHistoryRepository } from '../../../infrastructure/repository/medicalHistory/medicalHistory.repository';
import { MedicalHistoryResponseDto } from '../../dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';
import { IMedicalHistoryGetAllService } from '../../../domain/interfaces/service/medicalHistory/getAll/IMedicalHistoryGetAllService';

@Injectable()
export class MedicalHistoryGetAllService
  implements IMedicalHistoryGetAllService
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

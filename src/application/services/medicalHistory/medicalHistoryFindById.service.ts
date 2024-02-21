import { Injectable, NotFoundException } from '@nestjs/common';
import { MedicalHistoryRepository } from '../../../infrastructure/repository/medicalHistory/medicalHistory.repository';
import { IMedicalHistoryFindByIdService } from '../../../domain/interfaces/service/medicalHistory/findById/IMedicalHistoryFindByIdService';
import { MedicalHistoryResponseDto } from '../../../domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

@Injectable()
export class MedicalHistoryFindByIdService
  implements IMedicalHistoryFindByIdService
{
  constructor(
    private readonly medicalHistoryRepository: MedicalHistoryRepository,
  ) {}

  /**
   * findById medicalHistory
   * @param _id
   * @returns
   */
  async findById(_id: string): Promise<MedicalHistoryResponseDto> {
    try {
      const searchMedicalHistory =
        await this.medicalHistoryRepository.findById(_id);
      if (!searchMedicalHistory) {
        throw new NotFoundException('This medicalHistory doest not exist');
      }
      return searchMedicalHistory;
    } catch (error) {
      throw error;
    }
  }
}

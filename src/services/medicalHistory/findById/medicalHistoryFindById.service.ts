import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MedicalHistoryResponseDto } from 'src/domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';
import { IMedicalHistoryRepository } from 'src/domain/interfaces/infrastructure/medicalHistory/IMedicalHistory.repository';
import { IMedicalHistoryFindByIdService } from 'src/domain/interfaces/services/medicalHistory/findById/IMedicalHistoryFindByIdService';

@Injectable()
export class MedicalHistoryFindByIdService
  implements IMedicalHistoryFindByIdService
{
  constructor(
    @Inject('MedicalHistoryRepository')
    private readonly _medicalHistoryRepository: IMedicalHistoryRepository,
  ) {}

  /**
   * findById medicalHistory
   * @param _id
   * @returns
   */
  async findById(_id: string): Promise<MedicalHistoryResponseDto> {
    try {
      const searchMedicalHistory = await this._medicalHistoryRepository.findOne(
        {
          _id,
        },
      );

      if (!searchMedicalHistory) {
        throw new NotFoundException('This medicalHistory doest not exist');
      }

      return searchMedicalHistory;
    } catch (error) {
      throw error;
    }
  }
}

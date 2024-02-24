import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IMedicalHistoryRepository } from '../../../../domain/interfaces/repository/medicalHistory/IMedicalHistory.repository';
import { IMedicalHistoryFindByIdService } from '../../../../domain/interfaces/service/medicalHistory/findById/IMedicalHistoryFindByIdService';
import { MedicalHistoryResponseDto } from '../../../../domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

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

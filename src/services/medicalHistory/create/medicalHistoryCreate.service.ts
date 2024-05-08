import { Inject, Injectable } from '@nestjs/common';
import { MedicalHistoryRequestDto } from 'src/domain/entities/medicalHistory/dto/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from 'src/domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';
import { IMedicalHistoryRepository } from 'src/domain/interfaces/infrastructure/medicalHistory/IMedicalHistory.repository';
import { IMedicalHistoryCreateService } from 'src/domain/interfaces/services/medicalHistory/create/IMedicalHistoryCreateService';

@Injectable()
export class MedicalHistoryCreateService
  implements IMedicalHistoryCreateService
{
  constructor(
    @Inject('MedicalHistoryRepository')
    private readonly _medicalHistoryRepository: IMedicalHistoryRepository,
  ) {}

  /**
   * create medicalHistory
   * @param request
   */
  async create(
    request: MedicalHistoryRequestDto,
  ): Promise<MedicalHistoryResponseDto> {
    try {
      return await this._medicalHistoryRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}

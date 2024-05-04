import { Inject, Injectable } from '@nestjs/common';
import { IMedicalHistoryRepository } from '../../../../domain/interfaces/repository/medicalHistory/IMedicalHistory.repository';
import { IMedicalHistoryCreateService } from '../../../../domain/interfaces/service/medicalHistory/create/IMedicalHistoryCreateService';
import { MedicalHistoryRequestDto } from '../../../../domain/entities/medicalHistory/dto/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../../domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

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

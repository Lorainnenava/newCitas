import { Inject, Injectable } from '@nestjs/common';
import { MedicalHistoryRequestDto } from 'src/domain/entities/medicalHistory/dto/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from 'src/domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';
import { IMedicalHistoryRepository } from 'src/domain/interfaces/infrastructure/medicalHistory/IMedicalHistory.repository';
import { IMedicalHistoryUpdateService } from 'src/domain/interfaces/services/medicalHistory/update/IMedicalHistoryUpdateService';

@Injectable()
export class MedicalHistoryUpdateService
  implements IMedicalHistoryUpdateService
{
  constructor(
    @Inject('MedicalHistoryRepository')
    private readonly _medicalHistoryRepository: IMedicalHistoryRepository,
  ) {}

  /**
   * update medicalHistory
   * @param request
   * @returns
   */
  async update(
    request: MedicalHistoryRequestDto,
  ): Promise<MedicalHistoryResponseDto> {
    try {
      return await this._medicalHistoryRepository.update(request._id, request);
    } catch (error) {
      throw error;
    }
  }
}

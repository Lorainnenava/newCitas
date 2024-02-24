import { Inject, Injectable } from '@nestjs/common';
import { IMedicalHistoryRepository } from '../../../../domain/interfaces/repository/medicalHistory/IMedicalHistory.repository';
import { IMedicalHistoryUpdateService } from '../../../../domain/interfaces/service/medicalHistory/update/IMedicalHistoryUpdateService';
import { MedicalHistoryRequestDto } from '../../../../domain/entities/medicalHistory/dto/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../../domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

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

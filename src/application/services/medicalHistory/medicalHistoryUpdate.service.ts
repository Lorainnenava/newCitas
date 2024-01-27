import { Injectable, Body } from '@nestjs/common';
import { MedicalHistoryRepository } from '../../../infrastructure/repository/medicalHistory/medicalHistory.repository';
import { IMedicalHistoryUpdateService } from '../../../domain/interfaces/service/medicalHistory/update/IMedicalHistoryUpdateService';
import { MedicalHistoryRequestDto } from '../../../domain/dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../domain/dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';

@Injectable()
export class MedicalHistoryUpdateService
  implements IMedicalHistoryUpdateService
{
  constructor(
    private readonly medicalHistoryRepository: MedicalHistoryRepository,
  ) {}

  /**
   * update medicalHistory
   * @param request
   * @returns
   */
  async update(
    @Body() request: MedicalHistoryRequestDto,
  ): Promise<MedicalHistoryResponseDto> {
    try {
      return await this.medicalHistoryRepository.update(request);
    } catch (error) {
      throw error;
    }
  }
}

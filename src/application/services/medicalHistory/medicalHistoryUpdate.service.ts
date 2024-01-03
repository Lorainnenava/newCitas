import { Injectable, Body, Param } from '@nestjs/common';
import { MedicalHistoryRequestDto } from '../../dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryRepository } from '../../../infrastructure/repository/medicalHistory/medicalHistory.repository';
import { MedicalHistoryResponseDto } from '../../dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';
import { IMedicalHistoryUpdateService } from '../../../domain/interfaces/service/medicalHistory/update/IMedicalHistoryUpdateService';

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
   * @param _id
   * @returns
   */
  async update(
    @Body() request: MedicalHistoryRequestDto,
    @Param('_id') _id: string,
  ): Promise<MedicalHistoryResponseDto> {
    try {
      return await this.medicalHistoryRepository.update(request, _id);
    } catch (error) {
      throw error;
    }
  }
}

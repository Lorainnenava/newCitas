import { Injectable, Body } from '@nestjs/common';
import { MedicalHistoryRequestDto } from '../../dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryRepository } from '../../../infrastructure/repository/medicalHistory/medicalHistory.repository';
import { MedicalHistoryResponseDto } from '../../dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';
import { IMedicalHistoryCreateService } from '../../../domain/interfaces/service/medicalHistory/create/IMedicalHistoryCreateService';

@Injectable()
export class MedicalHistoryCreateService
  implements IMedicalHistoryCreateService
{
  constructor(
    private readonly medicalHistoryRepository: MedicalHistoryRepository,
  ) {}

  /**
   * create medicalHistory
   * @param request
   */
  async create(
    @Body() request: MedicalHistoryRequestDto,
  ): Promise<MedicalHistoryResponseDto> {
    try {
      return await this.medicalHistoryRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}

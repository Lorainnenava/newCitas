import { Injectable, Body } from '@nestjs/common';
import { MedicalHistoryRepository } from '../../../infrastructure/repository/medicalHistory/medicalHistory.repository';
import { IMedicalHistoryCreateService } from '../../../domain/interfaces/service/medicalHistory/create/IMedicalHistoryCreateService';
import { MedicalHistoryRequestDto } from '../../../domain/dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../domain/dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';

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

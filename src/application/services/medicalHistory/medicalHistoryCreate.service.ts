import { Injectable } from '@nestjs/common';
import { MedicalHistoryRepository } from '../../../infrastructure/repository/medicalHistory/medicalHistory.repository';
import { IMedicalHistoryCreateService } from '../../../domain/interfaces/service/medicalHistory/create/IMedicalHistoryCreateService';
import { MedicalHistoryRequestDto } from '../../../domain/entities/medicalHistory/dto/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

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
    request: MedicalHistoryRequestDto,
  ): Promise<MedicalHistoryResponseDto> {
    try {
      return await this.medicalHistoryRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}

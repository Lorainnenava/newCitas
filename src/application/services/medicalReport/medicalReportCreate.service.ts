import { Injectable, Body } from '@nestjs/common';
import { MedicalReportRepository } from '../../../infrastructure/repository/medicalReport/medicalReport.repository';
import { IMedicalReportCreateService } from '../../../domain/interfaces/service/medicalReport/create/IMedicalReportCreateService';
import { MedicalReportRequestDto } from '../../../domain/dtos/medicalReport/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../../domain/dtos/medicalReport/response/medicalReport/medicalReportResponse.dto';

@Injectable()
export class MedicalReportCreateService implements IMedicalReportCreateService {
  constructor(
    private readonly medicalReportRepository: MedicalReportRepository,
  ) {}

  /**
   * create medicalReport
   * @param request
   */
  async create(
    @Body() request: MedicalReportRequestDto,
  ): Promise<MedicalReportResponseDto> {
    try {
      return await this.medicalReportRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}

import { Injectable, Body } from '@nestjs/common';
import { MedicalReportRequestDto } from '../../dtos/medicalReport/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportRepository } from '../../../infrastructure/repository/medicalReport/medicalReport.repository';
import { MedicalReportResponseDto } from '../../dtos/medicalReport/response/medicalReport/medicalReportResponse.dto';
import { IMedicalReportCreateService } from '../../../domain/interfaces/service/medicalReport/create/IMedicalReportCreateService';

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

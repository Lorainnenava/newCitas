import { Injectable } from '@nestjs/common';
import { MedicalReportRepository } from '../../../infrastructure/repository/medicalReport/medicalReport.repository';
import { IMedicalReportsGetAllService } from '../../../domain/interfaces/service/medicalReport/getAll/IMedicalReportsGetAllService';
import { MedicalReportResponseDto } from '../../../domain/dtos/medicalReport/response/medicalReport/medicalReportResponse.dto';

@Injectable()
export class MedicalReportsGetAllService
  implements IMedicalReportsGetAllService
{
  constructor(
    private readonly medicalReportRepository: MedicalReportRepository,
  ) {}

  /**
   * getAll medicalReports
   * @returns
   */
  async getAll(): Promise<MedicalReportResponseDto[]> {
    try {
      return await this.medicalReportRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}

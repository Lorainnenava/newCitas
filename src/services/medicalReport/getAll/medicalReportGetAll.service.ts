import { Inject, Injectable } from '@nestjs/common';
import { MedicalReportResponseDto } from 'src/domain/entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';
import { IMedicalReportRepository } from 'src/domain/interfaces/infrastructure/medicalReport/IMedicalReport.repository';
import { IMedicalReportsGetAllService } from 'src/domain/interfaces/services/medicalReport/getAll/IMedicalReportsGetAllService';

@Injectable()
export class MedicalReportsGetAllService
  implements IMedicalReportsGetAllService
{
  constructor(
    @Inject('MedicalReportRepository')
    private readonly _medicalReportRepository: IMedicalReportRepository,
  ) {}

  /**
   * getAll medicalReports
   * @returns
   */
  async getAll(): Promise<MedicalReportResponseDto[]> {
    try {
      return await this._medicalReportRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}

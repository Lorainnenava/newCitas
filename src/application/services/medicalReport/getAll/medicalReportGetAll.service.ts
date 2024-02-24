import { Inject, Injectable } from '@nestjs/common';
import { IMedicalReportRepository } from '../../../../domain/interfaces/repository/medicalReport/IMedicalReport.repository';
import { IMedicalReportsGetAllService } from '../../../../domain/interfaces/service/medicalReport/getAll/IMedicalReportsGetAllService';
import { MedicalReportResponseDto } from '../../../../domain/entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';

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

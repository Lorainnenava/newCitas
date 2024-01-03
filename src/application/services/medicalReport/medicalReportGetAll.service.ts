import { Injectable } from '@nestjs/common';
import { MedicalReportRepository } from '../../../infrastructure/repository/medicalReport/medicalReport.repository';
import { MedicalReportResponseDto } from '../../dtos/medicalReport/response/medicalReport/medicalReportResponse.dto';
import { IMedicalReportGetAllService } from '../../../domain/interfaces/service/medicalReport/getAll/IMedicalReportGetAllService';

@Injectable()
export class MedicalReportGetAllService implements IMedicalReportGetAllService {
  constructor(
    private readonly medicalReportRepository: MedicalReportRepository,
  ) {}

  /**
   * getAll medicalReport
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

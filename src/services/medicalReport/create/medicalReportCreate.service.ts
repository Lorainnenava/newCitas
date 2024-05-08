import { Inject, Injectable } from '@nestjs/common';
import { MedicalReportRequestDto } from 'src/domain/entities/medicalReport/dto/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from 'src/domain/entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';
import { IMedicalReportRepository } from 'src/domain/interfaces/infrastructure/medicalReport/IMedicalReport.repository';
import { IMedicalReportCreateService } from 'src/domain/interfaces/services/medicalReport/create/IMedicalReportCreateService';

@Injectable()
export class MedicalReportCreateService implements IMedicalReportCreateService {
  constructor(
    @Inject('MedicalReportRepository')
    private readonly _medicalReportRepository: IMedicalReportRepository,
  ) {}

  /**
   * create medicalReport
   * @param request
   */
  async create(
    request: MedicalReportRequestDto,
  ): Promise<MedicalReportResponseDto> {
    try {
      return await this._medicalReportRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { IMedicalReportRepository } from '../../../../domain/interfaces/repository/medicalReport/IMedicalReport.repository';
import { IMedicalReportCreateService } from '../../../../domain/interfaces/service/medicalReport/create/IMedicalReportCreateService';
import { MedicalReportRequestDto } from '../../../../domain/entities/medicalReport/dto/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../../../domain/entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';

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

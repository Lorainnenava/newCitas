import { Injectable } from '@nestjs/common';
import { MedicalReportRepository } from '../../../../infrastructure/repository/medicalReport/medicalReport.repository';
import { MedicalReportResponseDto } from '../../../../domain/entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';
import { IMedicalReportFindByIdService } from '../../../../domain/interfaces/service/medicalReport/findById/IMedicalReportFindByIdService';

@Injectable()
export class MedicalReportFindByIdService
  implements IMedicalReportFindByIdService
{
  constructor(
    private readonly medicalReportRepository: MedicalReportRepository,
  ) {}

  /**
   * findById medicalReport
   * @param _id
   * @returns
   */
  async findById(_id: string): Promise<MedicalReportResponseDto> {
    try {
      return await this.medicalReportRepository.findOne({ _id });
    } catch (error) {
      throw error;
    }
  }
}

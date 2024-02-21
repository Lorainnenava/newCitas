import { Injectable } from '@nestjs/common';
import { MedicalReportRepository } from '../../../infrastructure/repository/medicalReport/medicalReport.repository';
import { IMedicalReportFindByIdService } from '../../../domain/interfaces/service/medicalReport/findById/IMedicalReportFindByIdService';
import { MedicalReportResponseDto } from '../../../domain/entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';

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
      return await this.medicalReportRepository.findById(_id);
    } catch (error) {
      throw error;
    }
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { MedicalReportResponseDto } from 'src/domain/entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';
import { IMedicalReportRepository } from 'src/domain/interfaces/infrastructure/medicalReport/IMedicalReport.repository';
import { IMedicalReportFindByIdService } from 'src/domain/interfaces/services/medicalReport/findById/IMedicalReportFindByIdService';

@Injectable()
export class MedicalReportFindByIdService
  implements IMedicalReportFindByIdService
{
  constructor(
    @Inject('MedicalReportRepository')
    private readonly _medicalReportRepository: IMedicalReportRepository,
  ) {}

  /**
   * findById medicalReport
   * @param _id
   * @returns
   */
  async findById(_id: string): Promise<MedicalReportResponseDto> {
    try {
      return await this._medicalReportRepository.findOne({ _id });
    } catch (error) {
      throw error;
    }
  }
}

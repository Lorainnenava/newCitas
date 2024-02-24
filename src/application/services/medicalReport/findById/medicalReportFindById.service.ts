import { Inject, Injectable } from '@nestjs/common';
import { IMedicalReportRepository } from '../../../../domain/interfaces/repository/medicalReport/IMedicalReport.repository';
import { MedicalReportResponseDto } from '../../../../domain/entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';
import { IMedicalReportFindByIdService } from '../../../../domain/interfaces/service/medicalReport/findById/IMedicalReportFindByIdService';

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

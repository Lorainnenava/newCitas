import { MedicalReportResponseDto } from '../../../../entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';

export interface IMedicalReportsGetAllService {
  /**
   * getAll MedicalReport
   */
  getAll(): Promise<MedicalReportResponseDto[]>;
}

import { MedicalReportResponseDto } from '../../../../dtos/medicalReport/response/medicalReport/medicalReportResponse.dto';

export interface IMedicalReportsGetAllService {
  /**
   * getAll MedicalReport
   */
  getAll(): Promise<MedicalReportResponseDto[]>;
}

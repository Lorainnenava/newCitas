import { MedicalReportResponseDto } from '../../../../../application/dtos/medicalReport/response/medicalReport/medicalReportResponse.dto';

export interface IMedicalReportGetAllService {
  /**
   * getAll MedicalReport
   */
  getAll(): Promise<MedicalReportResponseDto[]>;
}

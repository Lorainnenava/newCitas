import { MedicalReportRequestDto } from '../../../../../application/dtos/medicalReport/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../../../../application/dtos/medicalReport/response/medicalReport/medicalReportResponse.dto';

export interface IMedicalReportCreateService {
  /**
   * create medicalReport
   * @param request
   */
  create(request: MedicalReportRequestDto): Promise<MedicalReportResponseDto>;
}

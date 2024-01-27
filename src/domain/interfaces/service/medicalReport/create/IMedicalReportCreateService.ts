import { MedicalReportRequestDto } from '../../../../dtos/medicalReport/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../../../dtos/medicalReport/response/medicalReport/medicalReportResponse.dto';

export interface IMedicalReportCreateService {
  /**
   * create medicalReport
   * @param request
   */
  create(request: MedicalReportRequestDto): Promise<MedicalReportResponseDto>;
}

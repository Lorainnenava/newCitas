import { MedicalReportRequestDto } from '../../../../entities/medicalReport/dto/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../../../entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';

export interface IMedicalReportCreateService {
  /**
   * create medicalReport
   * @param request
   */
  create(request: MedicalReportRequestDto): Promise<MedicalReportResponseDto>;
}

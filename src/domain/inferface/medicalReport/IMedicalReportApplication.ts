import { MedicalReportRequestDto } from '../../collections/medicalReport/dto/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../collections/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';

export interface IMedicalReportApplication {
  /**
   * create medicalReport
   * @param request
   */
  create(request: MedicalReportRequestDto): Promise<object>;

  /**
   * findById MedicalReport
   * @param _id
   */
  findById(_id: string): Promise<MedicalReportResponseDto>;
}

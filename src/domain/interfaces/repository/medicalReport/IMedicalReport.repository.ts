import { MedicalReportRequestDto } from '../../../dtos/medicalReport/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../../dtos/medicalReport/response/medicalReport/medicalReportResponse.dto';

export interface IMedicalReportRepository {
  /**
   * create medicalReport
   * @param request
   */
  create(request: MedicalReportRequestDto): Promise<MedicalReportResponseDto>;

  /**
   * getAll medicalReport
   */
  getAll(): Promise<MedicalReportResponseDto[]>;

  /**
   * findById medicalReport
   * @param _id
   */
  findById(_id: string): Promise<MedicalReportResponseDto>;
}

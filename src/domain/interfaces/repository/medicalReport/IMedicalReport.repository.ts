import { MedicalReportRequestDto } from '../../../entities/medicalReport/dto/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../../entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';

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

import { MedicalReportRequestDto } from "../../../../application/dtos/medicalReport/request/medicalReport/medicalReportRequest.dto";
import { MedicalReportResponseDto } from "../../../../application/dtos/medicalReport/response/medicalReport/medicalReportResponse.dto";

export interface IMedicalReportApplication {
  /**
   * create medicalReport
   * @param request
   */
  create(request: MedicalReportRequestDto): Promise<object>;

  /**
   * getAll MedicalReport
   */
  getAll(): Promise<MedicalReportResponseDto[]>;

  /**
   * findById MedicalReport
   * @param _id
   */
  findById(_id: string): Promise<MedicalReportResponseDto>;
}

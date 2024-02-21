import { MedicalReportResponseDto } from '../../../../entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';

export interface IMedicalReportFindByIdService {
  /**
   * findById MedicalReport
   * @param _id
   */
  findById(_id: string): Promise<MedicalReportResponseDto>;
}

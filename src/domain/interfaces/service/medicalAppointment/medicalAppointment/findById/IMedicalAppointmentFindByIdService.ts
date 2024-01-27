import { MedicalAppointmentResponseDto } from '../../../../../dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentFindByIdService {
  /**
   * findById medicalAppointment
   * @param _id
   */
  findById(_id: string): Promise<MedicalAppointmentResponseDto>;
}

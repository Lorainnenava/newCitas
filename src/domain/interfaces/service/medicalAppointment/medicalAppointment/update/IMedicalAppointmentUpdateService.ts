import { MedicalAppointmentRequestDto } from '../../../../../dtos/medicalAppointment/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../../dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentUpdateService {
  /**
   * update medicalAppointment
   * @param request
   */
  update(
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto>;
}

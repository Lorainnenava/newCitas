import { MedicalAppointmentRequestDto } from '../../../../../dtos/medicalAppointment/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../../dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentCreateService {
  /**
   * create medicalAppointment
   * @param request
   */
  create(
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto>;
}

import { MedicalAppointmentRequestDto } from '../../../../../../application/dtos/medicalAppointments/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../../../application/dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentCreateService {
  /**
   * create medicalAppointment
   * @param request
   */
  create(
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto>;
}

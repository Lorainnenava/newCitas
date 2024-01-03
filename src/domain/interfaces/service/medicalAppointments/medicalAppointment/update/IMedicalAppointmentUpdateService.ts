import { MedicalAppointmentRequestDto } from '../../../../../../application/dtos/medicalAppointments/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../../../application/dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentUpdateService {
  /**
   * update medicalAppointment
   * @param request
   */
  update(
    request: MedicalAppointmentRequestDto,
    _id: string,
  ): Promise<MedicalAppointmentResponseDto>;
}

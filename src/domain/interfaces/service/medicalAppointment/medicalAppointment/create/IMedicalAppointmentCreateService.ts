import { MedicalAppointmentRequestDto } from '../../../../../entities/medicalAppointment/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../../entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentCreateService {
  /**
   * create medicalAppointment
   * @param request
   */
  create(
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto>;
}

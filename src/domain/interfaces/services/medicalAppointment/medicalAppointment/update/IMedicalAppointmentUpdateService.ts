import { MedicalAppointmentRequestDto } from '../../../../../entities/medicalAppointment/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../../entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentUpdateService {
  /**
   * update medicalAppointment
   * @param request
   */
  update(
    _id: string,
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto>;
}

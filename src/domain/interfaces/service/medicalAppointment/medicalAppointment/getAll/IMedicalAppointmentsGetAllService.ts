import { MedicalAppointmentResponseDto } from '../../../../../dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentsGetAllService {
  /**
   * getAll medicalAppointment
   */
  getAll(): Promise<MedicalAppointmentResponseDto[]>;
}

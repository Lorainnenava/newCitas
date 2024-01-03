import { MedicalAppointmentResponseDto } from '../../../../../../application/dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentGetAllService {
  /**
   * getAll medicalAppointment
   */
  getAll(): Promise<MedicalAppointmentResponseDto[]>;
}

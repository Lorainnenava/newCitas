import { MedicalAppointmentResponseDto } from "../../../../../entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto";

export interface IMedicalAppointmentsGetAllService {
  /**
   * getAll medicalAppointment
   */
  getAll(): Promise<MedicalAppointmentResponseDto[]>;
}

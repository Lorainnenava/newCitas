import { MedicalAppointmentResponseDto } from "../../../../../entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto";

export interface IMedicalAppointmentDeleteService {
  /**
   * delete medicalAppointment
   * @param _id
   */
  delete(_id: string): Promise<MedicalAppointmentResponseDto>;
}

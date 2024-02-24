import { MedicalAppointmentResponseDto } from '../../../../../entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentsGetAllByDoctorService {
  /**
   * getAllByDoctor medicalAppointment
   * @param doctor
   */
  getAllByDoctor(doctor: string): Promise<MedicalAppointmentResponseDto[]>;
}

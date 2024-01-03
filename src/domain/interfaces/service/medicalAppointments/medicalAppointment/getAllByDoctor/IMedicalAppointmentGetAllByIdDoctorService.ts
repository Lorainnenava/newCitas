import { MedicalAppointmentResponseDto } from '../../../../../../application/dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentGetAllByDoctorService {
  /**
   * getAllByDoctor medicalAppointment
   * @param doctor
   */
  getAllByDoctor(doctor: string): Promise<MedicalAppointmentResponseDto[]>;
}

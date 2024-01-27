import { MedicalAppointmentResponseDto } from '../../../../../dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentsGetAllByDoctorService {
  /**
   * getAllByDoctor medicalAppointment
   * @param doctor
   */
  getAllByDoctor(doctor: string): Promise<MedicalAppointmentResponseDto[]>;
}

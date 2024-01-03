import { MedicalAppointmentResponseDto } from '../../../../../application/dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IScheduleRepository {
  /**
   * getAllByDay appointmentsOfDay
   * @param user
   */
  getAllByDay(
    date: string,
    documentNumber: number,
  ): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * getAllByDay futureAppointments
   * @param user
   */
  getAllByFuture(
    dateAppointment: string,
    documentNumber: number,
  ): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * getAllByDay cancelledAppointments
   * @param user
   */
  getAllByCancelled(
    documentNumber: number,
  ): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * getAllByDay appointmentHistory
   * @param user
   */
  getAllHistory(
    dateAppointment: string,
    documentNumber: number,
  ): Promise<MedicalAppointmentResponseDto[]>;
}

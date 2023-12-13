import { RequestUser } from '../../../../../utils/types';
import { MedicalAppointmentResponseDto } from '../../../../../application/dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IScheduleRepository {
  /**
   * filter by appointmentsOfDay
   * @param user
   */
  filterByDay(user: RequestUser): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * filter by futureAppointments
   * @param user
   */
  futureAppointments(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * filter by cancelledAppointments
   * @param user
   */
  cancelledAppointments(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * filter by appointmentHistory
   * @param user
   */
  appointmentHistory(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]>;
}

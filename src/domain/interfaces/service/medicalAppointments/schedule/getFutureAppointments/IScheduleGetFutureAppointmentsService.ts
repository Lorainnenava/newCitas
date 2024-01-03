import { RequestUser } from '../../../../../../utils/types';
import { MedicalAppointmentResponseDto } from '../../../../../../application/dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IScheduleGetFutureAppointmentsService {
  /**
   * getFutureAppointments
   * @param user
   */
  getFutureAppointments(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]>;
}

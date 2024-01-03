import { RequestUser } from '../../../../../../utils/types';
import { MedicalAppointmentResponseDto } from '../../../../../../application/dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IScheduleGetCancelledAppointmentsService {
  /**
   * getCancelledAppointments
   * @param user
   */
  getCancelledAppointments(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]>;
}

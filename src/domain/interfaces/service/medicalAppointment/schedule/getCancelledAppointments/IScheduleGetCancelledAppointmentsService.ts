import { RequestUser } from '../../../../../../utils/types';
import { MedicalAppointmentResponseDto } from '../../../../../entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IScheduleGetCancelledAppointmentsService {
  /**
   * getCancelledAppointments
   * @param user
   */
  getCancelledAppointments(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]>;
}

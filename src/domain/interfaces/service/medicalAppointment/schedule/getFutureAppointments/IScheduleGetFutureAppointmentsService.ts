import { RequestUser } from '../../../../../../utils/types';
import { MedicalAppointmentResponseDto } from '../../../../../entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IScheduleGetFutureAppointmentsService {
  /**
   * getFutureAppointments
   * @param user
   */
  getFutureAppointments(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]>;
}

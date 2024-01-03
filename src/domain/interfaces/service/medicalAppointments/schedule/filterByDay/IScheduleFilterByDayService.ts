import { RequestUser } from '../../../../../../utils/types';
import { MedicalAppointmentResponseDto } from '../../../../../../application/dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IScheduleFilterByDayService {
  /**
   * filterByDay
   * @param user
   */
  filterByDay(user: RequestUser): Promise<MedicalAppointmentResponseDto[]>;
}

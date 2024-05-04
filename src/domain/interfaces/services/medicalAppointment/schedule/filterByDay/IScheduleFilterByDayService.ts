import { RequestUser } from '../../../../../../utils/types';
import { MedicalAppointmentResponseDto } from '../../../../../entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IScheduleFilterByDayService {
  /**
   * filterByDay
   * @param user
   */
  filterByDay(user: RequestUser): Promise<MedicalAppointmentResponseDto[]>;
}

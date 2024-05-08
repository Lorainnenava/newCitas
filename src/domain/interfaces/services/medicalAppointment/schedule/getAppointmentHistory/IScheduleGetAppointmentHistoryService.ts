import { RequestUser } from 'src/shared/interface/types';
import { MedicalAppointmentResponseDto } from '../../../../../entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IScheduleGetAppointmentHistoryService {
  /**
   * getAppointmentHistory
   * @param user
   */
  getAppointmentHistory(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]>;
}

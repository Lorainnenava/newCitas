import { RequestUser } from '../../../../../../utils/types';
import { MedicalAppointmentResponseDto } from '../../../../../dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IScheduleGetAppointmentHistoryService {
  /**
   * getAppointmentHistory
   * @param user
   */
  getAppointmentHistory(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]>;
}

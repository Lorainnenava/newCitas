import { RequestUser } from '../../../../../../utils/types';
import { MedicalAppointmentResponseDto } from '../../../../../../application/dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentGetAllByIdService {
  /**
   * getAllById medicalAppointment
   * @param user
   */
  getAllById(user: RequestUser): Promise<MedicalAppointmentResponseDto[]>;
}

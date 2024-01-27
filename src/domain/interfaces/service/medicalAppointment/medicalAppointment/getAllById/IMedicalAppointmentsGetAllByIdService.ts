import { RequestUser } from '../../../../../../utils/types';
import { MedicalAppointmentResponseDto } from '../../../../../dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentsGetAllByIdService {
  /**
   * getAllById medicalAppointment
   * @param user
   */
  getAllById(user: RequestUser): Promise<MedicalAppointmentResponseDto[]>;
}

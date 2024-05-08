import { MedicalAppointmentResponseDto } from 'src/domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { RequestUser } from 'src/shared/interface/types';

export interface IMedicalAppointmentsGetAllByIdService {
  /**
   * getAllById medicalAppointment
   * @param user
   */
  getAllById(user: RequestUser): Promise<MedicalAppointmentResponseDto[]>;
}

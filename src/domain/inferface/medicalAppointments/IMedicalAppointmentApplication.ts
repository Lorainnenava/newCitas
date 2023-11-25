import { RequestUser } from '../../../utils/types';
import { MedicalAppointmentRequestDto } from '../../collections/medicalAppointments/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../collections/medicalAppointments/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentApplication {
  /**
   * create medicalAppointment
   * @param request
   */
  create?(
    request: MedicalAppointmentRequestDto,
    user: RequestUser,
  ): Promise<object>;

  /**
   * getAllById medicalAppointment
   * @param user
   */
  getAllById?(user: RequestUser): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * getAllBySpecialty medicalAppointment
   * @param specialty
   */
  getAllBySpecialty?(
    specialty: string,
  ): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * getAllByDoctor medicalAppointment
   * @param specialty
   */
  getAllByDoctor?(doctor: string): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * update medicalAppointment
   * @param request
   */
  update?(
    request: MedicalAppointmentRequestDto,
    _id: string,
  ): Promise<MedicalAppointmentResponseDto>;
}

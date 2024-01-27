import { RequestUser } from '../../../../../utils/types';
import { MedicalAppointmentRequestDto } from '../../../../dtos/medicalAppointment/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentRepository {
  /**
   * create medicalAppointment
   * @param request
   */
  create(
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto>;

  /**
   * getAll medicalAppointments
   */
  getAll(): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * getAllById medicalAppointments
   * @param user
   */
  getAllById(user: RequestUser): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * findById medicalAppointment
   * @param _id
   */
  findById(_id: string): Promise<MedicalAppointmentResponseDto>;

  /**
   * getAllByDoctor medicalAppointments
   * @param doctor
   */
  getAllByDoctor(doctor: string): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * update medicalAppointment
   * @param request
   */
  update(
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto>;

  /**
   * delete medicalAppointment
   * @param _id
   */
  delete(_id: string): Promise<MedicalAppointmentResponseDto>;
}

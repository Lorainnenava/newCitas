import { RequestUser } from '../../../../../utils/types';
import { MedicalAppointmentRequestDto } from '../../../../../application/dtos/medicalAppointments/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../../application/dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IMedicalAppointmentRepository {
  /**
   * create medicalAppointment
   * @param request
   */
  create(
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto>;

  /**
   * getAll medicalAppointment
   */
  getAll(): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * getAllById medicalAppointment
   * @param user
   */
  getAllById(user: RequestUser): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * findById medicalAppointment
   * @param _id
   */
  findById(_id: string): Promise<object>;

  /**
   * getAllByDoctor medicalAppointment
   * @param doctor
   */
  getAllByDoctor(doctor: string): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * update medicalAppointment
   * @param request
   */
  update(
    request: MedicalAppointmentRequestDto,
    _id: string,
  ): Promise<MedicalAppointmentResponseDto>;

  /**
   * delete medicalAppointment
   * @param _id
   */
  delete(_id: string): Promise<object>;
}

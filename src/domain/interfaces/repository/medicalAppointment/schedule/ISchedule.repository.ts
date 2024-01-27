import { MedicalAppointmentResponseDto } from '../../../../dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

export interface IScheduleRepository {
  /**
   * getAllByDay
   * @param dateAppointment
   * @param documentNumber
   */
  getAllByDay(
    dateAppointment: string,
    documentNumber: number,
  ): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * getAllByFuture
   * @param dateAppointment
   * @param documentNumber
   */
  getAllByFuture(
    dateAppointment: string,
    documentNumber: number,
  ): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * getAllByCancelled
   * @param documentNumber
   */
  getAllByCancelled(
    documentNumber: number,
  ): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * getAllHistory
   * @param dateAppointment
   * @param documentNumber
   */
  getAllHistory(
    dateAppointment: string,
    documentNumber: number,
  ): Promise<MedicalAppointmentResponseDto[]>;
}

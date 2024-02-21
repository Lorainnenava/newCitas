import { Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../utils/types';
import { IScheduleGetCancelledAppointmentsService } from '../../../../domain/interfaces/service/medicalAppointment/schedule/getCancelledAppointments/IScheduleGetCancelledAppointmentsService';
import { MedicalAppointmentResponseDto } from '../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointment/medicalAppointment.repository';

@Injectable()
export class ScheduleByCancelledAppointmentsService
  implements IScheduleGetCancelledAppointmentsService
{
  constructor(
    private readonly medicalAppointmentRepository: MedicalAppointmentRepository,
  ) {}

  /**
   * filter by cancelledAppointments
   * @returns
   */
  async getCancelledAppointments(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    return await this.medicalAppointmentRepository.getAll({
      'doctor.documentInfo.documentNumber': user.documentNumber,
      cancelled: true,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../utils/types';
import { ScheduleRepository } from '../../../../infrastructure/repository/schedule/schedule.repository';
import { IScheduleGetCancelledAppointmentsService } from '../../../../domain/interfaces/service/medicalAppointment/schedule/getCancelledAppointments/IScheduleGetCancelledAppointmentsService';
import { MedicalAppointmentResponseDto } from '../../../../domain/dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

@Injectable()
export class ScheduleByCancelledAppointmentsService
  implements IScheduleGetCancelledAppointmentsService
{
  constructor(private readonly scheduleRepository: ScheduleRepository) {}

  /**
   * filter by cancelledAppointments
   * @returns
   */
  async getCancelledAppointments(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    return await this.scheduleRepository.getAllByCancelled(user.documentNumber);
  }
}

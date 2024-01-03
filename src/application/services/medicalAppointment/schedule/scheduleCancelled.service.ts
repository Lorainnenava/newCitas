import { Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../utils/types';
import { ScheduleRepository } from '../../../../infrastructure/repository/schedule/schedule.repository';
import { MedicalAppointmentResponseDto } from '../../../dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IScheduleGetCancelledAppointmentsService } from '../../../../domain/interfaces/service/medicalAppointments/schedule/getCancelledAppointments/IScheduleGetCancelledAppointmentsService';

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

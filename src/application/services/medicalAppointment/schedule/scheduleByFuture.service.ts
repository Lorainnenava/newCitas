import { Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../utils/types';
import { DateService } from '../../../../utils/date/date.service';
import { ScheduleRepository } from '../../../../infrastructure/repository/schedule/schedule.repository';
import { IScheduleGetFutureAppointmentsService } from '../../../../domain/interfaces/service/medicalAppointment/schedule/getFutureAppointments/IScheduleGetFutureAppointmentsService';
import { MedicalAppointmentResponseDto } from '../../../../domain/dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

@Injectable()
export class ScheduleByFutureAppointmentsService
  implements IScheduleGetFutureAppointmentsService
{
  constructor(
    private readonly scheduleRepository: ScheduleRepository,
    private dateService: DateService,
  ) {}

  /**
   * filter by futureAppointments
   * @returns
   */
  async getFutureAppointments(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const dateAppointment = this.dateService.getCurrentDate();
    return await this.scheduleRepository.getAllByFuture(
      dateAppointment,
      user.documentNumber,
    );
  }
}

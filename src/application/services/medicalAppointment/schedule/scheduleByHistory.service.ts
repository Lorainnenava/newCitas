import { Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../utils/types';
import { DateService } from '../../../../utils/date/date.service';
import { ScheduleRepository } from '../../../../infrastructure/repository/schedule/schedule.repository';
import { IScheduleGetAppointmentHistoryService } from '../../../../domain/interfaces/service/medicalAppointment/schedule/getAppointmentHistory/IScheduleGetAppointmentHistoryService';
import { MedicalAppointmentResponseDto } from '../../../../domain/dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

@Injectable()
export class ScheduleByAppointmentHistoryService
  implements IScheduleGetAppointmentHistoryService
{
  constructor(
    private readonly scheduleRepository: ScheduleRepository,
    private dateService: DateService,
  ) {}

  /**
   * filter by appointmentHistory
   * @returns
   */
  async getAppointmentHistory(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const dateAppointment = this.dateService.getCurrentDate();
    return await this.scheduleRepository.getAllHistory(
      dateAppointment,
      user.documentNumber,
    );
  }
}

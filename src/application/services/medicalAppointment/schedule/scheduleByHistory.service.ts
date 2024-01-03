import { Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../utils/types';
import { DateService } from '../../../../utils/date/date.service';
import { ScheduleRepository } from '../../../../infrastructure/repository/schedule/schedule.repository';
import { MedicalAppointmentResponseDto } from '../../../dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IScheduleGetAppointmentHistoryService } from '../../../../domain/interfaces/service/medicalAppointments/schedule/getAppointmentHistory/IScheduleGetAppointmentHistoryService';

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

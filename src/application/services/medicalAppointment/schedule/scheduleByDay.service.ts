import { Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../utils/types';
import { DateService } from '../../../../utils/date/date.service';
import { ScheduleRepository } from '../../../../infrastructure/repository/schedule/schedule.repository';
import { MedicalAppointmentResponseDto } from '../../../dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IScheduleFilterByDayService } from '../../../../domain/interfaces/service/medicalAppointments/schedule/filterByDay/IScheduleFilterByDayService';

@Injectable()
export class ScheduleByDayService implements IScheduleFilterByDayService {
  constructor(
    private readonly scheduleRepository: ScheduleRepository,
    private dateService: DateService,
  ) {}

  /**
   * filter medicalAppointment by day
   * @returns
   */
  async filterByDay(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const dateAppointment = this.dateService.getCurrentDate();
    return await this.scheduleRepository.getAllByDay(
      dateAppointment,
      user.documentNumber,
    );
  }
}

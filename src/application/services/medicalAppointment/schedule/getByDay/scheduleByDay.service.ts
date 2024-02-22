import { Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../../utils/types';
import { DateService } from '../../../../../utils/date/date.service';
import { MedicalAppointmentRepository } from '../../../../../infrastructure/repository/medicalAppointment/medicalAppointment.repository';
import { IScheduleFilterByDayService } from '../../../../../domain/interfaces/service/medicalAppointment/schedule/filterByDay/IScheduleFilterByDayService';
import { MedicalAppointmentResponseDto } from '../../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

@Injectable()
export class ScheduleByDayService implements IScheduleFilterByDayService {
  constructor(
    private readonly medicalAppointmentRepository: MedicalAppointmentRepository,
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
    return await this.medicalAppointmentRepository.getAll({
      state: true,
      date: dateAppointment,
      'doctor.documentInfo.documentNumber': user.documentNumber,
    });
  }
}

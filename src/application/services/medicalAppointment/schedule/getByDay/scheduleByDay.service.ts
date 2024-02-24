import { Inject, Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../../utils/types';
import { DateService } from '../../../../../utils/date/date.service';
import { IScheduleFilterByDayService } from '../../../../../domain/interfaces/service/medicalAppointment/schedule/filterByDay/IScheduleFilterByDayService';
import { MedicalAppointmentResponseDto } from '../../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from '../../../../../domain/interfaces/repository/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';

@Injectable()
export class ScheduleByDayService implements IScheduleFilterByDayService {
  constructor(
    @Inject('MedicalAppointmentRepository')
    private readonly _medicalAppointmentRepository: IMedicalAppointmentRepository,
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
    return await this._medicalAppointmentRepository.getAll({
      state: true,
      date: dateAppointment,
      'doctor.documentInfo.documentNumber': user.documentNumber,
    });
  }
}

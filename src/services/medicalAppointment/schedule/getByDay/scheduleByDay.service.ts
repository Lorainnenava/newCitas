import { Inject, Injectable } from '@nestjs/common';
import { MedicalAppointmentResponseDto } from 'src/domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from 'src/domain/interfaces/infrastructure/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IScheduleFilterByDayService } from 'src/domain/interfaces/services/medicalAppointment/schedule/filterByDay/IScheduleFilterByDayService';
import { RequestUser } from 'src/shared/interface/types';
import { DateService } from 'src/shared/utils/date/date.service';

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

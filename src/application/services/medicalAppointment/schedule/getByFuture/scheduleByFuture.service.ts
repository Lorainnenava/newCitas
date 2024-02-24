import { Inject, Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../../utils/types';
import { DateService } from '../../../../../utils/date/date.service';
import { MedicalAppointmentResponseDto } from '../../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from '../../../../../domain/interfaces/repository/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IScheduleGetFutureAppointmentsService } from '../../../../../domain/interfaces/service/medicalAppointment/schedule/getFutureAppointments/IScheduleGetFutureAppointmentsService';

@Injectable()
export class ScheduleByFutureAppointmentsService
  implements IScheduleGetFutureAppointmentsService
{
  constructor(
    @Inject('MedicalAppointmentRepository')
    private readonly _medicalAppointmentRepository: IMedicalAppointmentRepository,
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
    return await this._medicalAppointmentRepository.getAll({
      state: true,
      date: { $gt: dateAppointment },
      'doctor.documentInfo.documentNumber': user.documentNumber,
      cancelled: false,
    });
  }
}

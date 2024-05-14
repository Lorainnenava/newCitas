import { Inject, Injectable } from '@nestjs/common';
import { MedicalAppointmentResponseDto } from 'src/domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from 'src/domain/interfaces/infrastructure/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IScheduleGetFutureAppointmentsService } from 'src/domain/interfaces/services/medicalAppointment/schedule/getFutureAppointments/IScheduleGetFutureAppointmentsService';
import { RequestUser } from 'src/shared/interface/types';
import { DateService } from 'src/shared/utils/date/date.service';

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
      'doctor.documentInfo.documentNumber': user?.documentNumber,
      cancelled: false,
    });
  }
}

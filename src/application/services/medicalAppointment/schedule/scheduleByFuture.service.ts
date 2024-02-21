import { Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../utils/types';
import { DateService } from '../../../../utils/date/date.service';
import { IScheduleGetFutureAppointmentsService } from '../../../../domain/interfaces/service/medicalAppointment/schedule/getFutureAppointments/IScheduleGetFutureAppointmentsService';
import { MedicalAppointmentResponseDto } from '../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointment/medicalAppointment.repository';

@Injectable()
export class ScheduleByFutureAppointmentsService
  implements IScheduleGetFutureAppointmentsService
{
  constructor(
    private readonly medicalAppointmentRepository: MedicalAppointmentRepository,
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
    return await this.medicalAppointmentRepository.getAll({
      state: true,
      date: { $gt: dateAppointment },
      'doctor.documentInfo.documentNumber': user.documentNumber,
      cancelled: false,
    });
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../../utils/types';
import { DateService } from '../../../../../utils/date/date.service';
import { MedicalAppointmentResponseDto } from '../../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from '../../../../../domain/interfaces/repository/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IScheduleGetAppointmentHistoryService } from '../../../../../domain/interfaces/service/medicalAppointment/schedule/getAppointmentHistory/IScheduleGetAppointmentHistoryService';

@Injectable()
export class ScheduleByAppointmentHistoryService
  implements IScheduleGetAppointmentHistoryService
{
  constructor(
    @Inject('MedicalAppointmentRepository')
    private readonly _medicalAppointmentRepository: IMedicalAppointmentRepository,
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
    return await this._medicalAppointmentRepository.getAll({
      date: { $lt: dateAppointment },
      cancelled: false,
      'doctor.documentInfo.documentNumber': user.documentNumber,
    });
  }
}

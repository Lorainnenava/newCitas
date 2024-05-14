import { Inject, Injectable } from '@nestjs/common';
import { MedicalAppointmentResponseDto } from 'src/domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from 'src/domain/interfaces/infrastructure/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IScheduleGetAppointmentHistoryService } from 'src/domain/interfaces/services/medicalAppointment/schedule/getAppointmentHistory/IScheduleGetAppointmentHistoryService';
import { RequestUser } from 'src/shared/interface/types';
import { DateService } from 'src/shared/utils/date/date.service';

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
      'doctor.documentInfo.documentNumber': user?.documentNumber,
    });
  }
}

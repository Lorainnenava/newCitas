import { Injectable } from '@nestjs/common';
import { RequestUser } from '../../../../utils/types';
import { DateService } from '../../../../utils/date/date.service';
import { IScheduleGetAppointmentHistoryService } from '../../../../domain/interfaces/service/medicalAppointment/schedule/getAppointmentHistory/IScheduleGetAppointmentHistoryService';
import { MedicalAppointmentResponseDto } from '../../../../domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { MedicalAppointmentRepository } from '../../../../infrastructure/repository/medicalAppointment/medicalAppointment.repository';

@Injectable()
export class ScheduleByAppointmentHistoryService
  implements IScheduleGetAppointmentHistoryService
{
  constructor(
    private readonly medicalAppointmentRepository: MedicalAppointmentRepository,
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
    return await this.medicalAppointmentRepository.getAll({
      date: { $lt: dateAppointment },
      cancelled: false,
      'doctor.documentInfo.documentNumber': user.documentNumber,
    });
  }
}

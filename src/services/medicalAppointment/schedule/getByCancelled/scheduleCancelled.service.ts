import { Inject, Injectable } from '@nestjs/common';
import { MedicalAppointmentResponseDto } from 'src/domain/entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { IMedicalAppointmentRepository } from 'src/domain/interfaces/infrastructure/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { IScheduleGetCancelledAppointmentsService } from 'src/domain/interfaces/services/medicalAppointment/schedule/getCancelledAppointments/IScheduleGetCancelledAppointmentsService';
import { RequestUser } from 'src/shared/interface/types';

@Injectable()
export class ScheduleByCancelledAppointmentsService
  implements IScheduleGetCancelledAppointmentsService
{
  constructor(
    @Inject('MedicalAppointmentRepository')
    private readonly _medicalAppointmentRepository: IMedicalAppointmentRepository,
  ) {}

  /**
   * filter by cancelledAppointments
   * @returns
   */
  async getCancelledAppointments(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    return await this._medicalAppointmentRepository.getAll({
      'doctor.documentInfo.documentNumber': user?.documentNumber,
      cancelled: true,
    });
  }
}

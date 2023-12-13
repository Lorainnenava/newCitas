import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RequestUser } from '../../../../utils/types';
import { DateService } from '../../../../utils/date/date.service';
import { IScheduleApplication } from '../../../../domain/interfaces/service/medicalAppointments/schedule/IScheduleApplication';
import { MedicalAppointment, medicalAppointmentDocument } from '../../../../domain/entities/medicalAppointments/medicalAppointment.entity';
import { MedicalAppointmentResponseDto } from '../../../dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

/**
 * ScheduleService
 */
@Injectable()
export class ScheduleService implements IScheduleApplication {
  constructor(
    @InjectModel(MedicalAppointment.name)
    private readonly medicalAppointmentModel: Model<medicalAppointmentDocument>,
    private dateService: DateService,
  ) { }

  /**
   * filter medicalAppointment by day
   * @returns
   */
  async filterByDay(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const dateAppointment = this.dateService.getCurrentDate();
    return await this.medicalAppointmentModel.find({
      date: dateAppointment,
      'doctor.documentInfo.documentNumber': user.documentNumber,
    });
  }

  /**
   * filter by futureAppointments
   * @returns
   */
  async futureAppointments(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const dateAppointment = this.dateService.getCurrentDate();
    return await this.medicalAppointmentModel.find({
      date: { $gt: dateAppointment },
      'doctor.documentInfo.documentNumber': user.documentNumber,
      cancelled: false
    });
  }

  /**
   * filter by cancelledAppointments
   * @returns
   */
  async cancelledAppointments(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    return await this.medicalAppointmentModel.find({
      cancelled: true,
      'doctor.documentInfo.documentNumber': user.documentNumber,
    });
  }

  /**
   * filter by appointmentHistory
   * @returns
   */
  async appointmentHistory(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    const dateAppointment = this.dateService.getCurrentDate();
    return await this.medicalAppointmentModel.find({
      date: { $lt: dateAppointment },
      cancelled: false,
      'doctor.documentInfo.documentNumber': user.documentNumber,
    });
  }
}

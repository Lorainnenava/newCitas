import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RequestUser } from '../../../utils/types';
import { DateService } from '../../../utils/date/date.service';
import {
  MedicalAppointment,
  medicalAppointmentDocument,
} from '../../../domain/collections/medicalAppointments/schema/medicalAppointment.entity';
import { ISchedule } from '../../../domain/inferface/medicalAppointments/schedule/IScheduleApplication';
import { MedicalAppointmentResponseDto } from '../../../domain/collections/medicalAppointments/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

/**
 * ScheduleService
 */
@Injectable()
export class ScheduleService implements ISchedule {
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

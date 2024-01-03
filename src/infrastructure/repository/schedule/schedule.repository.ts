import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MedicalAppointment } from '../../../domain/entities/medicalAppointments/medicalAppointment.entity';
import { IScheduleRepository } from '../../../domain/interfaces/repository/medicalAppointments/schedule/ISchedule.repository';
import { MedicalAppointmentResponseDto } from '../../../application/dtos/medicalAppointments/response/medicalAppointment/medicalAppointmentResponse.dto';

@Injectable()
export class ScheduleRepository implements IScheduleRepository {
  constructor(
    @InjectModel(MedicalAppointment.name)
    private readonly medicalAppointmentModel: Model<MedicalAppointment>,
  ) {}

  /**
   * getAllByDay medicalAppointmentModel
   * @param _id
   * @returns
   */
  async getAllByDay(
    date: string,
    documentNumber: number,
  ): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return this.medicalAppointmentModel.find({
        state: true,
        date,
        'doctor.documentInfo.documentNumber': documentNumber,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * getAllByFuture medicalAppointmentModel
   * @param _id
   * @returns
   */
  async getAllByFuture(
    dateAppointment: string,
    documentNumber: number,
  ): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return this.medicalAppointmentModel.find({
        state: true,
        date: { $gt: dateAppointment },
        'doctor.documentInfo.documentNumber': documentNumber,
        cancelled: false,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * getAllByFuture medicalAppointmentModel
   * @param _id
   * @returns
   */
  async getAllByCancelled(
    documentNumber: number,
  ): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return this.medicalAppointmentModel.find({
        'doctor.documentInfo.documentNumber': documentNumber,
        cancelled: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * getAllHistory medicalAppointmentModel
   * @param _id
   * @returns
   */
  async getAllHistory(
    dateAppointment: string,
    documentNumber: number,
  ): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return this.medicalAppointmentModel.find({
        date: { $lt: dateAppointment },
        cancelled: false,
        'doctor.documentInfo.documentNumber': documentNumber,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

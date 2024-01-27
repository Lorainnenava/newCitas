import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RequestUser } from '../../../utils/types';
import { MedicalAppointment } from '../../../domain/entities/medicalAppointment/medicalAppointment.entity';
import { IMedicalAppointmentRepository } from '../../../domain/interfaces/repository/medicalAppointment/medicalAppointment/IMedicalAppointment.repository';
import { MedicalAppointmentRequestDto } from '../../../domain/dtos/medicalAppointment/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../domain/dtos/medicalAppointment/response/medicalAppointment/medicalAppointmentResponse.dto';

@Injectable()
export class MedicalAppointmentRepository
  implements IMedicalAppointmentRepository
{
  constructor(
    @InjectModel(MedicalAppointment.name)
    private readonly medicalAppointmentModel: Model<MedicalAppointment>,
  ) {}

  /**
   * create medicalAppointmentModel
   * @param request
   * @returns
   */
  async create(
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      return await new this.medicalAppointmentModel(request).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * getAll medicalAppointmentModels
   * @returns
   */
  async getAll(): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return this.medicalAppointmentModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findOne medicalAppointmentModel
   * @param user
   * @returns
   */
  async getAllById(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return this.medicalAppointmentModel.find(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findOne medicalAppointmentModel
   * @param doctor
   * @returns
   */
  async getAllByDoctor(
    doctor: string,
  ): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return this.medicalAppointmentModel.find({
        'doctor.documentInfo.documentNumber': doctor,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findById medicalAppointmentModel
   * @param _id
   * @returns
   */
  async findById(_id: string): Promise<MedicalAppointmentResponseDto> {
    try {
      return this.medicalAppointmentModel.findById(_id);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findOne medicalAppointmentModel
   * @param _id
   * @returns
   */
  async findOne(
    date: string,
    timeAppointment: string,
    doctor: string,
    specialty: string,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      return this.medicalAppointmentModel.findOne({
        state: true,
        date: date,
        'doctor.firstName': doctor,
        timeAppointment: timeAppointment,
        'doctor.specialty': specialty,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * update medicalAppointmentModel
   * @param request
   * @returns
   */
  async update(
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      return await this.medicalAppointmentModel.findByIdAndUpdate(
        request._id,
        request,
        {
          new: true,
        },
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * delete invoice
   * @param _id
   * @returns
   */
  async delete(_id: string): Promise<MedicalAppointmentResponseDto> {
    try {
      return await this.medicalAppointmentModel.findByIdAndDelete(_id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RequestUser } from '../../../utils/types';
import {
  Body,
  Param,
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { MedicalAppointment } from '../../../domain/collections/medicalAppointments/schema/medicalAppointment.entity';
import { IMedicalAppointmentApplication } from '../../../domain/inferface/medicalAppointments/medicalAppointment/IMedicalAppointmentApplication';
import { MedicalAppointmentRequestDto } from '../../../domain/collections/medicalAppointments/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../domain/collections/medicalAppointments/dto/response/medicalAppointment/medicalAppointmentResponse.dto';

/**
 * MedicalAppointmentService
 */
@Injectable()
export class MedicalAppointmentService
  implements IMedicalAppointmentApplication
{
  constructor(
    @InjectModel(MedicalAppointment.name)
    private readonly medicalAppointmentModel: Model<MedicalAppointment>,
  ) {}

  /**
   * method create
   * @param request
   * @param user
   */
  async create(
    @Body() request: MedicalAppointmentRequestDto,
    user: RequestUser,
  ): Promise<object> {
    try {
      const existingAppointment = await this.medicalAppointmentModel.findOne({
        $and: [
          {
            date: request.date,
            timeAppointment: request.timeAppointment,
            statusAppointment: true,
          },
        ],
      });
      if (existingAppointment)
        throw new ConflictException('This medicalAppointment already exists');
      const createMedicalAppointment = await new this.medicalAppointmentModel({
        ...request,
        userInfo: {
          name: user.name,
          documentInfo: {
            typeDocument: user.typeDocument,
            documentNumber: user.documentNumber,
          },
        },
      }).save();
      return { createMedicalAppointment, msg: 'Cita creada con éxito' };
    } catch (error) {
      throw error;
    }
  }

  /**
   * findById medicalAppointment
   * @param _id
   * @returns
   */
  async findById(
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      const searchMedicalAppointment =
        await this.medicalAppointmentModel.findById(_id);
      if (searchMedicalAppointment === null)
        throw new NotFoundException('This medicalAppointment does not exist');
      return searchMedicalAppointment.toObject();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAll medicalAppointment
   * @returns
   */
  async getAll(): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return await this.medicalAppointmentModel.find();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAllById medicalAppointment
   * @param _id
   * @returns
   */
  async getAllById(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    try {
      return await this.medicalAppointmentModel.find({
        'userInfo.documentInfo.documentNumber': user.documentNumber,
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * update medicalAppointment
   * @param request
   * @param _id
   * @returns
   */
  async update(
    @Body() request: MedicalAppointmentRequestDto,
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      return await this.medicalAppointmentModel.findByIdAndUpdate(
        _id,
        request,
        {
          new: true,
        },
      );
    } catch (error) {
      throw error;
    }
  }

  /**
   * delete medicalAppointment
   * @param _id
   * @returns
   */
  async delete(
    @Param('_id') _id: string,
  ): Promise<MedicalAppointmentResponseDto> {
    try {
      const deleteMedicalAppointment =
        await this.medicalAppointmentModel.findByIdAndDelete(_id);
      if (deleteMedicalAppointment === null)
        throw new NotFoundException('This medicalAppointment does not exist');
      return deleteMedicalAppointment.toObject();
    } catch (error) {
      throw error;
    }
  }
}

import { Body, Param, Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMedicalAppointmentApplication } from '../../domain/inferface/medicalAppointments/IMedicalAppointmentApplication';
import { MedicalAppointment } from '../../domain/collections/medicalAppointments/schema/medicalAppointment.entity';
import { MedicalAppointmentRequestDto } from '../../domain/collections/medicalAppointments/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../domain/collections/medicalAppointments/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { RequestUser } from '../../utils/types';
import { userInfoResponseDto } from '../../domain/collections/medicalAppointments/dto/response/user/userInfoResponse.dto';

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
        throw new BadRequestException('This medicalAppointment already exists');
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
   * getAllById medicalAppointment
   * @param _id
   * @returns
   */
  async getAllById(
    user: RequestUser,
  ): Promise<MedicalAppointmentResponseDto[]> {
    try {
      const search = await this.medicalAppointmentModel.find({
        'userInfo.documentInfo.documentNumber': user.documentNumber,
      });
      if (!search) {
        return [];
      }
      return search.map((doc) => {
        const response = new MedicalAppointmentResponseDto();
        response._id = doc._id;
        response.userInfo = doc.userInfo as userInfoResponseDto;
        response.specialty = doc.specialty;
        response.timeAppointment = doc.timeAppointment;
        response.doctor = doc.doctor;
        response.date = doc.date;
        response.statusAppointment = doc.statusAppointment;
        response.state = doc.state;
        return response;
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAllBySpecialty medicalAppointment
   * @param specialty
   * @returns
   */
  async getAllBySpecialty(
    @Body() specialty: string,
  ): Promise<MedicalAppointmentResponseDto[]> {
    try {
      const serachAll = await this.medicalAppointmentModel.find({ specialty });
      if (!serachAll) {
        return [];
      }
      return serachAll.map((doc) => {
        const response = new MedicalAppointmentResponseDto();
        response._id = doc._id;
        response.userInfo = doc.userInfo as userInfoResponseDto;
        response.specialty = doc.specialty;
        response.timeAppointment = doc.timeAppointment;
        response.doctor = doc.doctor;
        response.date = doc.date;
        response.statusAppointment = doc.statusAppointment;
        response.state = doc.state;
        return response;
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
}

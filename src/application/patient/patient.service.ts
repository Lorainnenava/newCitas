import {
  Body,
  Param,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Patients } from '../../domain/collections/patients/schema/patiensts.entity';
import { IPatientApplication } from '../../domain/inferface/patients/IPatientApplication';
import { PatientRequestDto } from '../../domain/collections/patients/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../domain/collections/patients/dto/response/patient/patientResponse.dto';
import { RequestUser } from '../../utils/types';

/**
 * PatientService
 */
@Injectable()
export class PatientService implements IPatientApplication {
  constructor(
    @InjectModel(Patients.name) private readonly patientModel: Model<Patients>,
  ) {}

  /**
   * create patient
   * @param request
   */
  async create(
    @Body() requestPatient: PatientRequestDto,
    user: RequestUser,
  ): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this.patientModel.findOne({ _id: user.sub });
      if (searchPatient)
        throw new BadRequestException('This patient already exists');
      return await new this.patientModel(requestPatient).save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * findById
   * @param _id
   */
  async findById(@Param('_id') _id: string): Promise<PatientResponseDto> {
    const searchPatient = await this.patientModel.findById(_id);
    if (!searchPatient)
      throw new NotFoundException('This patient does not exist');
    return searchPatient;
  }

  /**
   * update patient
   * @param request
   * @param _id
   * @returns
   */
  async update(
    @Body() request: PatientRequestDto,
    @Param('_id') _id: string,
  ): Promise<PatientResponseDto> {
    try {
      const searchPatient = await this.patientModel.findByIdAndUpdate(
        _id,
        request,
        { new: true },
      );
      if (!searchPatient)
        throw new NotFoundException('This patient does not exist');
      return searchPatient;
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAll patient
   * @returns
   */
  async getAll(): Promise<PatientResponseDto[]> {
    try {
      const searchAllPatient = await this.patientModel.find();
      if (!searchAllPatient) {
        return [];
      }
      return searchAllPatient;
    } catch (error) {
      throw error;
    }
  }

  /**
   * delete patient
   * @param _id
   */
  async delete(@Param('_id') _id: string): Promise<boolean> {
    try {
      const search = await this.patientModel.findById({ _id });
      if (!search) {
        throw new NotFoundException('This patient does not exist');
      }
      return (await this.patientModel.deleteOne({ _id })).acknowledged;
    } catch (error) {
      throw error;
    }
  }
}

import { BadRequestException, Injectable, Param, Body } from '@nestjs/common';
import { IDoctorApplication } from '../../domain/inferface/doctors/IDoctorApplication';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor } from '../../domain/collections/doctors/schema/doctor.entity';
import { Model } from 'mongoose';
import { DoctorRequestDto } from '../../domain/collections/doctors/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../domain/collections/doctors/dto/response/doctorResponse.dto';

/**
 * DoctorService
 */
@Injectable()
export class DoctorService implements IDoctorApplication {
  constructor(
    @InjectModel(Doctor.name) private readonly doctorModel: Model<Doctor>,
  ) {}

  /**
   * create doctor
   * @param request
   */
  async create(@Body() request: DoctorRequestDto): Promise<DoctorResponseDto> {
    try {
      const searchDoctor = await this.doctorModel.findOne({
        name: request.name,
        specialty: request.specialty,
      });
      if (searchDoctor)
        throw new BadRequestException('This doctor already exists');
      return await new this.doctorModel(request).save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAll doctor
   * @returns
   */
  async getAll(): Promise<DoctorResponseDto[]> {
    try {
      return await this.doctorModel.find();
    } catch (error) {
      throw error;
    }
  }

  /**
   * delete doctor
   * @param _id
   * @returns
   */
  async delete(@Param('_id') _id: string): Promise<DoctorResponseDto> {
    try {
      const deleteDoctor = await this.doctorModel.findByIdAndDelete(_id);
      if (deleteDoctor === null)
        throw new BadRequestException('This doctor does not exist');
      return deleteDoctor;
    } catch (error) {
      throw error;
    }
  }
}

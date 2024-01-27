import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor } from '../../../domain/entities/doctor/doctor.entity';
import { IDoctorRepository } from '../../../domain/interfaces/repository/doctor/IDoctor.repository';
import { DoctorRequestDto } from '../../../domain/dtos/doctor/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../domain/dtos/doctor/response/doctorResponse.dto';

@Injectable()
export class DoctorRepository implements IDoctorRepository {
  constructor(
    @InjectModel(Doctor.name) private readonly doctorModel: Model<Doctor>,
  ) {}

  /**
   * create doctor
   * @param request
   * @returns
   */
  async create(request: DoctorRequestDto): Promise<DoctorResponseDto> {
    try {
      return await new this.doctorModel(request).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * getAll Doctors
   * @returns
   */
  async getAll(): Promise<DoctorResponseDto[]> {
    try {
      return this.doctorModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findOne doctor
   * @param documentNumber
   * @returns
   */
  async findOne(documentNumber: number): Promise<DoctorResponseDto> {
    try {
      const doctor = await this.doctorModel.findOne({
        'documentInfo.documentNumber': Number(documentNumber),
      });
      return doctor;
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * update doctor
   * @param request
   * @returns
   */
  async update(request: DoctorRequestDto): Promise<DoctorResponseDto> {
    try {
      return await this.doctorModel.findByIdAndUpdate(request._id, request, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * delete doctor
   * @param _id
   * @returns
   */
  async delete(_id: string): Promise<DoctorResponseDto> {
    try {
      return await this.doctorModel.findByIdAndDelete(_id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

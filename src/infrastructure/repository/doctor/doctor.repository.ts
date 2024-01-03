import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor } from '../../../domain/entities/doctors/doctor.entity';
import { DoctorRequestDto } from '../../../application/dtos/doctor/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../application/dtos/doctor/response/doctorResponse.dto';
import { IDoctorRepository } from '../../../domain/interfaces/repository/doctors/IDoctor.repository';

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
      return this.doctorModel.findOne({
        'documentInfo.documentNumber': documentNumber,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * update doctor
   * @param request
   * @param _id
   * @returns
   */
  async update(
    request: DoctorRequestDto,
    _id: string,
  ): Promise<DoctorResponseDto> {
    try {
      return await this.doctorModel.findByIdAndUpdate(_id, request, {
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

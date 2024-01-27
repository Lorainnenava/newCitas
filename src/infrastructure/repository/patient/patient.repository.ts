import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from '../../../domain/entities/patient/patient.entity';
import { IPatientRepository } from '../../../domain/interfaces/repository/patient/IPatient.repository';
import { PatientRequestDto } from '../../../domain/dtos/patient/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../domain/dtos/patient/response/patient/patientResponse.dto';

@Injectable()
export class PatientRepository implements IPatientRepository {
  constructor(
    @InjectModel(Patient.name) private readonly patientModel: Model<Patient>,
  ) {}

  /**
   * create
   * @param request
   * @returns
   */
  async create(request: PatientRequestDto): Promise<PatientResponseDto> {
    try {
      return new this.patientModel(request).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findById
   * @param _id
   * @returns
   */
  async findById(_id: string): Promise<PatientResponseDto> {
    try {
      return this.patientModel.findById(_id);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findOne
   * @param documentNumber
   * @returns
   */
  async findOne(documentNumber: number): Promise<PatientResponseDto> {
    try {
      return this.patientModel.findOne({
        'documentInfo.documentNumber': documentNumber,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * update
   * @param request
   * @returns
   */
  async update(request: PatientRequestDto): Promise<PatientResponseDto> {
    try {
      return this.patientModel.findByIdAndUpdate(request._id, request, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * delete
   * @param request
   * @returns
   */
  async delete(_id: string): Promise<PatientResponseDto> {
    try {
      return await this.patientModel.findOneAndDelete({ _id });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * getAll
   * @param request
   * @returns
   */
  async getAll(): Promise<PatientResponseDto[]> {
    try {
      return this.patientModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }
}

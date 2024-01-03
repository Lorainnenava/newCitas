import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Patients } from '../../../domain/entities/patients/patiensts.entity';
import { IPatientRepository } from '../../../domain/interfaces/repository/patients/IPatient.repository';
import { PatientRequestDto } from '../../../application/dtos/patients/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../application/dtos/patients/response/patient/patientResponse.dto';

@Injectable()
export class PatientRepository implements IPatientRepository {
  constructor(
    @InjectModel(Patients.name) private readonly patientModel: Model<Patients>,
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
  async update(
    request: PatientRequestDto,
    _id: string,
  ): Promise<PatientResponseDto> {
    try {
      return this.patientModel.findByIdAndUpdate(_id, request, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * delete
   * @param request
   * @returns
   */
  async delete(_id: string): Promise<boolean> {
    try {
      return (await this.patientModel.deleteOne({ _id })).acknowledged;
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

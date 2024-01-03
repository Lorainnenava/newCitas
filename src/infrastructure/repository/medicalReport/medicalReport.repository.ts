import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MedicalReport } from '../../../domain/entities/medicalReport/medicalReport.entity';
import { IMedicalReportRepository } from '../../../domain/interfaces/repository/medicalReport/IMedicalReport.repository';
import { MedicalReportRequestDto } from '../../../application/dtos/medicalReport/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../../application/dtos/medicalReport/response/medicalReport/medicalReportResponse.dto';

@Injectable()
export class MedicalReportRepository implements IMedicalReportRepository {
  constructor(
    @InjectModel(MedicalReport.name)
    private readonly medicalReportModel: Model<MedicalReport>,
  ) {}

  /**
   * create
   * @param request
   * @returns
   */
  async create(
    request: MedicalReportRequestDto,
  ): Promise<MedicalReportResponseDto> {
    try {
      return new this.medicalReportModel(request).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * getAll
   * @returns
   */
  async getAll(): Promise<MedicalReportResponseDto[]> {
    try {
      return this.medicalReportModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findById
   * @param _id
   * @returns
   */
  async findById(_id: string): Promise<MedicalReportResponseDto> {
    try {
      return this.medicalReportModel.findById(_id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

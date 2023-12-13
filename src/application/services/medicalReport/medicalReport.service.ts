import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Param, Body } from '@nestjs/common';
import { MedicalReport } from '../../../domain/entities/medicalReport/medicalReport.entity';
import { MedicalReportRequestDto } from '../../dtos/medicalReport/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../dtos/medicalReport/response/medicalReport/medicalReportResponse.dto';
import { IMedicalReportApplication } from '../../../domain/interfaces/repository/medicalReport/IMedicalReport.repository';

/**
 * MedicalReportService
 */
@Injectable()
export class MedicalReportService implements IMedicalReportApplication {
  constructor(
    @InjectModel(MedicalReport.name)
    private readonly medicalReportModel: Model<MedicalReport>,
  ) {}

  /**
   * create medicalReport
   * @param request
   */
  async create(@Body() request: MedicalReportRequestDto): Promise<object> {
    try {
      return await new this.medicalReportModel(request).save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAll medicalReport
   * @returns
   */
  async getAll(): Promise<MedicalReportResponseDto[]> {
    try {
      return await this.medicalReportModel.find();
    } catch (error) {
      throw error;
    }
  }

  /**
   * findById medicalReport
   * @param _id
   * @returns
   */
  async findById(@Param('_id') _id: string): Promise<MedicalReportResponseDto> {
    try {
      return await this.medicalReportModel.findById(_id);
    } catch (error) {
      throw error;
    }
  }
}

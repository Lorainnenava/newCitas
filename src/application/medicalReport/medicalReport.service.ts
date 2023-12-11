import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Param, Body } from '@nestjs/common';
import { MedicalReport } from '../../domain/collections/medicalReport/schema/medicalReport.entity';
import { IMedicalReportApplication } from '../../domain/inferface/medicalReport/IMedicalReportApplication';
import { MedicalReportRequestDto } from '../../domain/collections/medicalReport/dto/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../domain/collections/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';

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

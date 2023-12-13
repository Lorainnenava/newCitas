import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Body, Param, NotFoundException } from '@nestjs/common';
import { MedicalHistory } from '../../../domain/entities/medicalHistory/medicalHistory.entity';
import { MedicalHistoryRequestDto } from '../../dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';
import { IMedicalHistoryApplication } from '../../../domain/interfaces/service/medicalHistory/IMedicalHistoryApplication';

/**
 * MedicalHistoryService
 */
@Injectable()
export class MedicalHistoryService implements IMedicalHistoryApplication {
  constructor(
    @InjectModel(MedicalHistory.name)
    private readonly medicalHistoryModel: Model<MedicalHistory>,
  ) {}

  /**
   * create medicalHistory
   * @param request
   */
  async create(@Body() request: MedicalHistoryRequestDto): Promise<object> {
    try {
      return await new this.medicalHistoryModel(request).save();
    } catch (error) {
      throw error;
    }
  }

  /**
   * getAll medicalHistory
   * @returns
   */
  async getAll(): Promise<MedicalHistoryResponseDto[]> {
    try {
      return await this.medicalHistoryModel.find();
    } catch (error) {
      throw error;
    }
  }

  /**
   * findById medicalHistory
   * @param _id
   * @returns
   */
  async findById(@Param('_id') _id: string): Promise<object> {
    try {
      const searchMedicalHistory = await this.medicalHistoryModel.findById({
        _id,
      });
      if (!searchMedicalHistory) {
        throw new NotFoundException('This medicalHistory doest not exist');
      }
      return searchMedicalHistory;
    } catch (error) {
      throw error;
    }
  }

  /**
   * update medicalHistory
   * @param request
   * @param _id
   * @returns
   */
  async update(
    @Body() request: MedicalHistoryRequestDto,
    @Param('_id') _id: string,
  ): Promise<MedicalHistoryResponseDto> {
    try {
      return await this.medicalHistoryModel.findByIdAndUpdate(_id, request, {
        new: true,
      });
    } catch (error) {
      throw error;
    }
  }
}

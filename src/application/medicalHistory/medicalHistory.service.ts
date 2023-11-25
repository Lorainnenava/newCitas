import { Injectable, Body, Param, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMedicalHistoryApplication } from '../../domain/inferface/medicalHistory/IMedicalHistoryApplication';
import { MedicalHistory } from '../../domain/collections/medicalHistory/schema/medicalHistory.entity';
import { MedicalHistoryRequestDto } from '../../domain/collections/medicalHistory/dto/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../domain/collections/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

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
  async findById(
    @Param('_id') _id: string,
  ): Promise<object> {
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

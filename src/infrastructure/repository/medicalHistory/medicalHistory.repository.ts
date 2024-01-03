import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MedicalHistory } from '../../../domain/entities/medicalHistory/medicalHistory.entity';
import { IMedicalHistoryRepository } from '../../../domain/interfaces/repository/medicalHistory/IMedicalHistory.repository';
import { MedicalHistoryRequestDto } from '../../../application/dtos/medicalHistory/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../application/dtos/medicalHistory/response/medicalHistory/medicalHistoryResponse.dto';

@Injectable()
export class MedicalHistoryRepository implements IMedicalHistoryRepository {
  constructor(
    @InjectModel(MedicalHistory.name)
    private readonly medicalHistoryModel: Model<MedicalHistory>,
  ) {}

  /**
   * create
   * @param request
   * @returns
   */
  async create(
    request: MedicalHistoryRequestDto,
  ): Promise<MedicalHistoryResponseDto> {
    try {
      return (await new this.medicalHistoryModel(request).save()).toObject();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * getAll
   * @returns
   */
  async getAll(): Promise<MedicalHistoryResponseDto[]> {
    try {
      return await this.medicalHistoryModel.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * findById
   * @param _id
   * @returns
   */
  async findById(_id: string): Promise<MedicalHistoryResponseDto> {
    try {
      return await this.medicalHistoryModel.findById(_id);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * update
   * @param request
   * @param _id
   * @returns
   */
  async update(
    request: MedicalHistoryRequestDto,
    _id: string,
  ): Promise<MedicalHistoryResponseDto> {
    try {
      return await this.medicalHistoryModel.findByIdAndUpdate(_id, request, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

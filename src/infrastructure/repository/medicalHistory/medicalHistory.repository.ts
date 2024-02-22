import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MedicalHistory } from '../../../domain/entities/medicalHistory/medicalHistory.entity';
import { IMedicalHistoryRepository } from '../../../domain/interfaces/repository/medicalHistory/IMedicalHistory.repository';
import { MedicalHistoryRequestDto } from '../../../domain/entities/medicalHistory/dto/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../domain/entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

@Injectable()
export class MedicalHistoryRepository implements IMedicalHistoryRepository {
  constructor(
    @InjectModel(MedicalHistory.name)
    private readonly medicalHistoryModel: Model<MedicalHistory>,
  ) {}

  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
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
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  async getAll(
    options?: FilterQuery<MedicalHistoryRequestDto>,
  ): Promise<MedicalHistoryResponseDto[]> {
    try {
      return await this.medicalHistoryModel.find(options);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  async findOne(
    options?: FilterQuery<MedicalHistoryRequestDto>,
  ): Promise<MedicalHistoryResponseDto> {
    try {
      return await this.medicalHistoryModel.findById(options);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Updates an existing entity in the database.
   * @param options - The criteria to identify the entity to be updated.
   * @param request - The updated data for the entity.
   * @returns A promise that resolves to the updated entity.
   */
  async update(
    option: FilterQuery<MedicalHistoryRequestDto>,
    request: UpdateQuery<MedicalHistoryRequestDto>,
  ): Promise<MedicalHistoryResponseDto> {
    try {
      return await this.medicalHistoryModel.findByIdAndUpdate(option, request, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MedicalReport } from '../../../domain/entities/medicalReport/medicalReport.entity';
import { MedicalReportRequestDto } from '../../../domain/entities/medicalReport/dto/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../../domain/entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';
import { IMedicalReportRepository } from 'src/domain/interfaces/infrastructure/medicalReport/IMedicalReport.repository';

@Injectable()
export class MedicalReportRepository implements IMedicalReportRepository {
  constructor(
    @InjectModel(MedicalReport.name)
    private readonly medicalReportModel: Model<MedicalReport>,
  ) {}

  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
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
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  async getAll(
    options?: FilterQuery<MedicalReportRequestDto>,
  ): Promise<MedicalReportResponseDto[]> {
    try {
      return this.medicalReportModel.find(options);
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
    options?: FilterQuery<MedicalReportRequestDto>,
  ): Promise<MedicalReportResponseDto> {
    try {
      return this.medicalReportModel.findById(options);
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
    option: FilterQuery<MedicalReportRequestDto>,
    request: UpdateQuery<MedicalReportRequestDto>,
  ): Promise<MedicalReportResponseDto> {
    try {
      return await this.medicalReportModel.findByIdAndUpdate(option, request, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

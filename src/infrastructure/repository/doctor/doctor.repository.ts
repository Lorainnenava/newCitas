import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Doctor } from '../../../domain/entities/doctor/doctor.entity';
import { DoctorRequestDto } from '../../../domain/entities/doctor/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../domain/entities/doctor/dto/response/doctorResponse.dto';
import { IDoctorRepository } from 'src/domain/interfaces/infrastructure/doctor/IDoctor.repository';

@Injectable()
export class DoctorRepository implements IDoctorRepository {
  constructor(
    @InjectModel(Doctor.name) private readonly doctorModel: Model<Doctor>,
  ) {}

  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  async create(request: DoctorRequestDto): Promise<DoctorResponseDto> {
    try {
      return await new this.doctorModel(request).save();
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
    options?: FilterQuery<DoctorRequestDto>,
  ): Promise<DoctorResponseDto[]> {
    try {
      return this.doctorModel.find(options);
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
    options?: FilterQuery<DoctorRequestDto>,
  ): Promise<DoctorResponseDto> {
    try {
      const doctor = await this.doctorModel.findOne(options);
      return doctor;
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
    option: FilterQuery<DoctorRequestDto>,
    request: UpdateQuery<DoctorRequestDto>,
  ): Promise<DoctorResponseDto> {
    try {
      return await this.doctorModel.findByIdAndUpdate(option, request, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  async delete(
    options: FilterQuery<DoctorRequestDto>,
  ): Promise<DoctorResponseDto> {
    try {
      return await this.doctorModel.findByIdAndDelete(options);
    } catch (error) {
      throw new Error(error);
    }
  }
}

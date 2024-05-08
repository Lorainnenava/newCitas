import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from '../../../domain/entities/patient/patient.entity';
import { PatientRequestDto } from '../../../domain/entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../domain/entities/patient/dto/response/patient/patientResponse.dto';
import { IPatientRepository } from 'src/domain/interfaces/infrastructure/patient/IPatient.repository';

@Injectable()
export class PatientRepository implements IPatientRepository {
  constructor(
    @InjectModel(Patient.name) private readonly patientModel: Model<Patient>,
  ) {}

  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  async create(request: PatientRequestDto): Promise<PatientResponseDto> {
    try {
      return new this.patientModel(request).save();
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
    options?: FilterQuery<PatientRequestDto>,
  ): Promise<PatientResponseDto[]> {
    try {
      return this.patientModel.find(options);
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
    options?: FilterQuery<PatientRequestDto>,
  ): Promise<PatientResponseDto> {
    try {
      return this.patientModel.findOne(options);
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
    option: FilterQuery<PatientRequestDto>,
    request: UpdateQuery<PatientRequestDto>,
  ): Promise<PatientResponseDto> {
    try {
      return this.patientModel.findByIdAndUpdate(option, request, {
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
    options: FilterQuery<PatientRequestDto>,
  ): Promise<PatientResponseDto> {
    try {
      return await this.patientModel.findOneAndDelete(options);
    } catch (error) {
      throw new Error(error);
    }
  }
}

import { FilterQuery, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Specialty } from '../../../domain/entities/specialty/specialty.entity';
import { SpecialtyRequestDto } from '../../../domain/entities/specialty/dto/request/specialtyRequest.dto';
import { SpecialtyResponseDto } from '../../../domain/entities/specialty/dto/response/specialtyResponse.dto';
import { ISpecialtyRepository } from 'src/domain/interfaces/infrastructure/specialty/ISpecialty.repository';

@Injectable()
export class SpecialtyRepository implements ISpecialtyRepository {
  constructor(
    @InjectModel(Specialty.name)
    private readonly specialtyModel: Model<Specialty>,
  ) {}

  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  async create(request: SpecialtyRequestDto): Promise<SpecialtyResponseDto> {
    try {
      return new this.specialtyModel({
        name: request.name.toLocaleUpperCase(),
      }).save();
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
    options?: FilterQuery<SpecialtyRequestDto>,
  ): Promise<SpecialtyResponseDto[]> {
    try {
      return this.specialtyModel.find(options);
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
    options: FilterQuery<SpecialtyRequestDto>,
  ): Promise<SpecialtyResponseDto> {
    try {
      return await this.specialtyModel.findByIdAndDelete(options);
    } catch (error) {
      throw new Error(error);
    }
  }
}

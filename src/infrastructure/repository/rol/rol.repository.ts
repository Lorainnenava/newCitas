import { FilterQuery, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Rol } from '../../../domain/entities/rol/rol.entity';
import { IRolRepository } from '../../../domain/interfaces/repository/rol/IRol.repository';
import { RolRequestDto } from '../../../domain/entities/rol/dto/request/rolRequest.dto';
import { RolResponseDto } from '../../../domain/entities/rol/dto/response/rolResponse.dto';

@Injectable()
export class RolRepository implements IRolRepository {
  constructor(@InjectModel(Rol.name) private readonly roleModel: Model<Rol>) {}

  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  async create(request: RolRequestDto): Promise<RolResponseDto> {
    try {
      return await new this.roleModel(request).save();
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  async findOne(options?: FilterQuery<RolRequestDto>): Promise<RolResponseDto> {
    try {
      return await this.roleModel.findOne(options);
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
    options?: FilterQuery<RolRequestDto>,
  ): Promise<RolResponseDto[]> {
    try {
      return await this.roleModel.find(options);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  async delete(options: FilterQuery<RolRequestDto>): Promise<RolResponseDto> {
    try {
      return await this.roleModel.findByIdAndDelete(options);
    } catch (error) {
      throw new Error(error);
    }
  }
}

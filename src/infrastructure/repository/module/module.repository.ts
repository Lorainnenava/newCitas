import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Modules } from '../../../domain/entities/module/module.entity';
import { ModuleRequestDto } from '../../../domain/entities/module/dto/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../domain/entities/module/dto/response/module/moduleResponse.dto';
import { IModuleRepository } from 'src/domain/interfaces/infrastructure/module/IModule.repository';

@Injectable()
export class ModuleRepository implements IModuleRepository {
  constructor(
    @InjectModel(Modules.name) private readonly moduleModel: Model<Modules>,
  ) {}

  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  async create(request: ModuleRequestDto): Promise<ModuleResponseDto> {
    try {
      return (await new this.moduleModel(request).save()).toObject();
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
    options?: FilterQuery<ModuleRequestDto>,
  ): Promise<ModuleResponseDto[]> {
    try {
      return this.moduleModel.find(options);
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
    options?: FilterQuery<ModuleRequestDto>,
  ): Promise<ModuleResponseDto> {
    try {
      return this.moduleModel.findOne(options);
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
    option: FilterQuery<ModuleRequestDto>,
    request: UpdateQuery<ModuleRequestDto>,
  ): Promise<ModuleResponseDto> {
    try {
      return this.moduleModel.findByIdAndUpdate(option, request, {
        new: true,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

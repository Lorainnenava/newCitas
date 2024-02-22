import { FilterQuery, UpdateQuery } from 'mongoose';
import { ModuleRequestDto } from '../../../entities/module/dto/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../entities/module/dto/response/module/moduleResponse.dto';

export interface IModuleRepository {
  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  create(request: ModuleRequestDto): Promise<ModuleResponseDto>;

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  getAll(options?: FilterQuery<ModuleRequestDto>): Promise<ModuleResponseDto[]>;

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  findOne(options?: FilterQuery<ModuleRequestDto>): Promise<ModuleResponseDto>;

  /**
   * Updates an existing entity in the database.
   * @param request - The updated data for the entity.
   * @param options - The criteria to identify the entity to be updated.
   * @returns A promise that resolves to the updated entity.
   */
  update(
    option: FilterQuery<ModuleRequestDto>,
    request: UpdateQuery<ModuleRequestDto>,
  ): Promise<ModuleResponseDto>;
}

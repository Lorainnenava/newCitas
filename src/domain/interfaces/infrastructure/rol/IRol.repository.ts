import { FilterQuery } from 'mongoose';
import { RolRequestDto } from '../../../entities/rol/dto/request/rolRequest.dto';
import { RolResponseDto } from '../../../entities/rol/dto/response/rolResponse.dto';

export interface IRolRepository {
  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  create(request: RolRequestDto): Promise<RolResponseDto>;

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  getAll(options?: FilterQuery<RolRequestDto>): Promise<RolResponseDto[]>;

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  findOne(options?: FilterQuery<RolRequestDto>): Promise<RolResponseDto>;

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  delete(options: FilterQuery<RolRequestDto>): Promise<RolResponseDto>;
}

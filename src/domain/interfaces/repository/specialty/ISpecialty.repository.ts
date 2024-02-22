import { FilterQuery } from 'mongoose';
import { SpecialtyRequestDto } from '../../../entities/specialty/dto/request/specialtyRequest.dto';
import { SpecialtyResponseDto } from '../../../entities/specialty/dto/response/specialtyResponse.dto';

export interface ISpecialtyRepository {
  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  create(request: SpecialtyRequestDto): Promise<SpecialtyResponseDto>;

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  getAll(
    options?: FilterQuery<SpecialtyRequestDto>,
  ): Promise<SpecialtyResponseDto[]>;

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  delete(
    options: FilterQuery<SpecialtyRequestDto>,
  ): Promise<SpecialtyResponseDto>;
}

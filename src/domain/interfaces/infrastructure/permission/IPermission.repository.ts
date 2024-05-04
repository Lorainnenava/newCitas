import { FilterQuery, UpdateQuery } from 'mongoose';
import { PermissionRequestDto } from '../../../entities/permission/dto/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../entities/permission/dto/response/permissionResponse.dto';

export interface IPermissionRepository {
  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  create(request: PermissionRequestDto): Promise<PermissionResponseDto[]>;

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  getAll(
    options?: FilterQuery<PermissionRequestDto>,
  ): Promise<PermissionResponseDto[]>;

  /**
   * Updates an existing entity in the database.
   * @param request - The updated data for the entity.
   * @param options - The criteria to identify the entity to be updated.
   * @returns A promise that resolves to the updated entity.
   */
  update(
    option: FilterQuery<PermissionRequestDto>,
    request: UpdateQuery<PermissionRequestDto>,
  ): Promise<PermissionResponseDto[]>;
}

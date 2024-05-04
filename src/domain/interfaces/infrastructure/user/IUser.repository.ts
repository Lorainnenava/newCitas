import { FilterQuery, UpdateQuery } from 'mongoose';
import { UserRequestDto } from '../../../entities/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from '../../../entities/user/dto/response/user/userResponse.dto';

export interface IUserRepository {
  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  create(request: UserRequestDto): Promise<UserResponseDto>;

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  findOne(options?: FilterQuery<UserRequestDto>): Promise<UserResponseDto>;

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  getAll(options?: FilterQuery<UserRequestDto>): Promise<UserResponseDto[]>;

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  update(
    option: FilterQuery<UserRequestDto>,
    request: UpdateQuery<UserRequestDto>,
  ): Promise<UserResponseDto>;
}

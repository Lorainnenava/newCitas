import { FilterQuery } from 'mongoose';
import { SessionRequestDto } from '../../../entities/session/dto/request/session/sessionRequest.dto';
import { SessionResponseDto } from '../../../entities/session/dto/response/sessionResponse.dto';

export interface ISessionRepository {
  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  create(request: SessionRequestDto): Promise<SessionResponseDto>;

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  delete(options: FilterQuery<SessionRequestDto>): Promise<SessionResponseDto>;

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  findOne(
    options?: FilterQuery<SessionRequestDto>,
  ): Promise<SessionResponseDto>;
}

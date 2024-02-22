import { FilterQuery, UpdateQuery } from 'mongoose';
import { MedicalHistoryRequestDto } from '../../../entities/medicalHistory/dto/request/medicalHistory/medicalHistoryRequest.dto';
import { MedicalHistoryResponseDto } from '../../../entities/medicalHistory/dto/response/medicalHistory/medicalHistoryResponse.dto';

export interface IMedicalHistoryRepository {
  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  create(request: MedicalHistoryRequestDto): Promise<MedicalHistoryResponseDto>;

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  getAll(
    options?: FilterQuery<MedicalHistoryRequestDto>,
  ): Promise<MedicalHistoryResponseDto[]>;

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  findOne(
    options?: FilterQuery<MedicalHistoryRequestDto>,
  ): Promise<MedicalHistoryResponseDto>;

  /**
   * Updates an existing entity in the database.
   * @param request - The updated data for the entity.
   * @param options - The criteria to identify the entity to be updated.
   * @returns A promise that resolves to the updated entity.
   */
  update(
    option: FilterQuery<MedicalHistoryRequestDto>,
    request: UpdateQuery<MedicalHistoryRequestDto>,
  ): Promise<MedicalHistoryResponseDto>;
}

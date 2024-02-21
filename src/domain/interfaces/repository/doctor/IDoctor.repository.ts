import { FilterQuery, UpdateQuery } from 'mongoose';
import { DoctorRequestDto } from '../../../entities/doctor/dto/request/doctorRequest.dto';
import { DoctorResponseDto } from '../../../entities/doctor/dto/response/doctorResponse.dto';

export interface IDoctorRepository {
  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  create(request: DoctorRequestDto): Promise<DoctorResponseDto>;

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  getAll(options?: FilterQuery<DoctorRequestDto>): Promise<DoctorResponseDto[]>;

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  findOne(options?: FilterQuery<DoctorRequestDto>): Promise<DoctorResponseDto>;

  /**
   * Updates an existing entity in the database.
   * @param request - The updated data for the entity.
   * @param options - The criteria to identify the entity to be updated.
   * @returns A promise that resolves to the updated entity.
   */
  update(
    option: FilterQuery<DoctorRequestDto>,
    request: UpdateQuery<DoctorRequestDto>,
  ): Promise<DoctorResponseDto>;

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  delete(options: FilterQuery<DoctorRequestDto>): Promise<DoctorResponseDto>;
}

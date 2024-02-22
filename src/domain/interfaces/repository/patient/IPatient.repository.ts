import { FilterQuery, UpdateQuery } from 'mongoose';
import { PatientRequestDto } from '../../../entities/patient/dto/request/patient/patientRequest.dto';
import { PatientResponseDto } from '../../../entities/patient/dto/response/patient/patientResponse.dto';

export interface IPatientRepository {
  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  create(request: PatientRequestDto): Promise<PatientResponseDto>;

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  getAll(
    options?: FilterQuery<PatientRequestDto>,
  ): Promise<PatientResponseDto[]>;

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  findOne(
    options?: FilterQuery<PatientRequestDto>,
  ): Promise<PatientResponseDto>;

  /**
   * Updates an existing entity in the database.
   * @param request - The updated data for the entity.
   * @param options - The criteria to identify the entity to be updated.
   * @returns A promise that resolves to the updated entity.
   */
  update(
    option: FilterQuery<PatientRequestDto>,
    request: UpdateQuery<PatientRequestDto>,
  ): Promise<PatientResponseDto>;

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  delete(options: FilterQuery<PatientRequestDto>): Promise<PatientResponseDto>;
}

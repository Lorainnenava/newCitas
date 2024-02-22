import { FilterQuery, UpdateQuery } from 'mongoose';
import { MedicalReportRequestDto } from '../../../entities/medicalReport/dto/request/medicalReport/medicalReportRequest.dto';
import { MedicalReportResponseDto } from '../../../entities/medicalReport/dto/response/medicalReport/medicalReportResponse.dto';

export interface IMedicalReportRepository {
  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  create(request: MedicalReportRequestDto): Promise<MedicalReportResponseDto>;

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  getAll(
    options?: FilterQuery<MedicalReportRequestDto>,
  ): Promise<MedicalReportResponseDto[]>;

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  findOne(
    options?: FilterQuery<MedicalReportRequestDto>,
  ): Promise<MedicalReportResponseDto>;

  /**
   * Updates an existing entity in the database.
   * @param request - The updated data for the entity.
   * @param options - The criteria to identify the entity to be updated.
   * @returns A promise that resolves to the updated entity.
   */
  update(
    option: FilterQuery<MedicalReportRequestDto>,
    request: UpdateQuery<MedicalReportRequestDto>,
  ): Promise<MedicalReportResponseDto>;
}

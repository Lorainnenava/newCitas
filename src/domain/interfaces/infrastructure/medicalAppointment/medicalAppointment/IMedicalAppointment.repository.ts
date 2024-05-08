import { FilterQuery, UpdateQuery } from 'mongoose';
import { MedicalAppointmentRequestDto } from '../../../../entities/medicalAppointment/dto/request/medicalAppointment/medicalAppointmentRequest.dto';
import { MedicalAppointmentResponseDto } from '../../../../entities/medicalAppointment/dto/response/medicalAppointment/medicalAppointmentResponse.dto';
import { RequestUser } from 'src/shared/interface/types';

export interface IMedicalAppointmentRepository {
  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  create(
    request: MedicalAppointmentRequestDto,
  ): Promise<MedicalAppointmentResponseDto>;

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  getAll(
    options?: FilterQuery<RequestUser | MedicalAppointmentRequestDto>,
  ): Promise<MedicalAppointmentResponseDto[]>;

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  findOne(
    options?: FilterQuery<MedicalAppointmentRequestDto>,
  ): Promise<MedicalAppointmentResponseDto>;

  /**
   * Updates an existing entity in the database.
   * @param request - The updated data for the entity.
   * @param options - The criteria to identify the entity to be updated.
   * @returns A promise that resolves to the updated entity.
   */
  update(
    option: FilterQuery<MedicalAppointmentRequestDto>,
    request: UpdateQuery<MedicalAppointmentRequestDto>,
  ): Promise<MedicalAppointmentResponseDto>;

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  delete(
    options: FilterQuery<MedicalAppointmentRequestDto>,
  ): Promise<MedicalAppointmentResponseDto>;
}

import { FilterQuery, UpdateQuery } from 'mongoose';
import { InvoiceRequestDto } from '../../../entities/invoice/dto/request/invoice/invoiceRequest.dto';
import { InvoiceResponseDto } from '../../../entities/invoice/dto/response/invoice/invoiceResponse.dto';

export interface IInvoiceRepository {
  /**
   * Creates a new entity in the database.
   * @param request - The data for the new entity.
   * @returns A promise that resolves to the created entity.
   */
  create(request: InvoiceRequestDto): Promise<InvoiceResponseDto>;

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  getAll(
    options?: FilterQuery<InvoiceRequestDto>,
  ): Promise<InvoiceResponseDto[]>;

  /**
   * Finds and retrieves a single entity from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to the found entity.
   */
  findOne(
    options?: FilterQuery<InvoiceRequestDto>,
  ): Promise<InvoiceResponseDto>;

  /**
   * Updates an existing entity in the database.
   * @param request - The updated data for the entity.
   * @param options - The criteria to identify the entity to be updated.
   * @returns A promise that resolves to the updated entity.
   */
  update(
    option: FilterQuery<InvoiceRequestDto>,
    request: UpdateQuery<InvoiceRequestDto>,
  ): Promise<InvoiceResponseDto>;

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  delete(options: FilterQuery<InvoiceRequestDto>): Promise<InvoiceResponseDto>;
}

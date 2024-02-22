import { FilterQuery } from 'mongoose';
import { TypeOfDocumentRequestDto } from '../../../entities/typeOfDocument/dto/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../../entities/typeOfDocument/dto/response/typeOfDocumentResponsedto';

export interface ITypeOfDocumentRepository {
  /**
   * Create typeOfDocument
   * @param request
   */
  create(request: TypeOfDocumentRequestDto): Promise<TypeOfDocumentResponseDto>;

  /**
   * Retrieves all entities from the database.
   * @param options - Optional filter query parameters.
   * @returns A promise that resolves to an array of entities.
   */
  getAll(
    options?: FilterQuery<TypeOfDocumentRequestDto>,
  ): Promise<TypeOfDocumentResponseDto[]>;

  /**
   * Deletes an entity from the database.
   * @param options - The criteria to identify the entity to be deleted.
   * @returns A promise that resolves to the deleted entity.
   */
  delete(
    options: FilterQuery<TypeOfDocumentRequestDto>,
  ): Promise<TypeOfDocumentResponseDto>;
}

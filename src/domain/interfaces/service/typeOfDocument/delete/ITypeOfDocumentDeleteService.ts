import { TypeOfDocumentResponseDto } from '../../../../../application/dtos/typeOfDocument/response/typeOfDocumentResponsedto';

export interface ITypeOfDocumentDeleteService {
  /**
   * Delete typeOfDocument
   * @param _id
   */
  delete(_id: string): Promise<TypeOfDocumentResponseDto>;
}

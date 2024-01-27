import { TypeOfDocumentResponseDto } from '../../../../dtos/typeOfDocument/response/typeOfDocumentResponsedto';

export interface ITypeOfDocumentDeleteService {
  /**
   * Delete typeOfDocument
   * @param _id
   */
  delete(_id: string): Promise<TypeOfDocumentResponseDto>;
}

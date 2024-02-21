import { TypeOfDocumentResponseDto } from '../../../../entities/typeOfDocument/dto/response/typeOfDocumentResponsedto';

export interface ITypeOfDocumentDeleteService {
  /**
   * Delete typeOfDocument
   * @param _id
   */
  delete(_id: string): Promise<TypeOfDocumentResponseDto>;
}

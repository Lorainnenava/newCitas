import { TypeOfDocumentResponseDto } from '../../../../entities/typeOfDocument/dto/response/typeOfDocumentResponsedto';

export interface ITypeOfDocumentsGetAllService {
  /**
   * getAll users
   */
  getAll(): Promise<TypeOfDocumentResponseDto[]>;
}

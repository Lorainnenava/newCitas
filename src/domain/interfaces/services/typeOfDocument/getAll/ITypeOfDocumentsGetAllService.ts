import { TypeOfDocumentResponseDto } from '../../../../entities/typeOfDocument/dto/response/typeOfDocumentResponse.dto';

export interface ITypeOfDocumentsGetAllService {
  /**
   * getAll users
   */
  getAll(): Promise<TypeOfDocumentResponseDto[]>;
}

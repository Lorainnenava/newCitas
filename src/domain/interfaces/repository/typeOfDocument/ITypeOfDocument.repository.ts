import { TypeOfDocumentRequestDto } from '../../../dtos/typeOfDocument/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../../dtos/typeOfDocument/response/typeOfDocumentResponsedto';

export interface ITypeOfDocumentRepository {
  /**
   * Create typeOfDocument
   * @param request
   */
  create(request: TypeOfDocumentRequestDto): Promise<TypeOfDocumentResponseDto>;

  /**
   * getAll typeOfDocuments
   */
  getAll(): Promise<TypeOfDocumentResponseDto[]>;

  /**
   * Delete typeOfDocument
   * @param _id
   */
  delete(_id: string): Promise<TypeOfDocumentResponseDto>;
}

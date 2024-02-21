import { TypeOfDocumentRequestDto } from '../../../entities/typeOfDocument/dto/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../../entities/typeOfDocument/dto/response/typeOfDocumentResponsedto';

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

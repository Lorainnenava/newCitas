import { TypeOfDocumentRequestDto } from '../../../../application/dtos/typeOfDocument/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../../../application/dtos/typeOfDocument/response/typeOfDocumentResponsedto';

export interface ITypeOfDocumentApplication {
  /**
   * Create typeOfDocument
   * @param request
   */
  create(request: TypeOfDocumentRequestDto): Promise<TypeOfDocumentResponseDto>;

  /**
   * getAll users
   */
  getAll(): Promise<TypeOfDocumentResponseDto[]>;

  /**
   * Delete typeOfDocument
   * @param _id
   */
  delete(_id: string): Promise<TypeOfDocumentResponseDto>;
}

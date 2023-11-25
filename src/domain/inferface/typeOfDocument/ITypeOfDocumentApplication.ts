import { TypeOfDocumentRequestDto } from '../../collections/typeOfDocument/dto/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../collections/typeOfDocument/dto/response/typeOfDocumentResponsedto';

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

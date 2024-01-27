import { TypeOfDocumentRequestDto } from '../../../../dtos/typeOfDocument/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../../../dtos/typeOfDocument/response/typeOfDocumentResponsedto';

export interface ITypeOfDocumentCreateService {
  /**
   * Create typeOfDocument
   * @param request
   */
  create(request: TypeOfDocumentRequestDto): Promise<TypeOfDocumentResponseDto>;
}

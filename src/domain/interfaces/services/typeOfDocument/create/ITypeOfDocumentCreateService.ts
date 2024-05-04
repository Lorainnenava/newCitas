import { TypeOfDocumentRequestDto } from '../../../../entities/typeOfDocument/dto/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../../../entities/typeOfDocument/dto/response/typeOfDocumentResponse.dto';

export interface ITypeOfDocumentCreateService {
  /**
   * Create typeOfDocument
   * @param request
   */
  create(request: TypeOfDocumentRequestDto): Promise<TypeOfDocumentResponseDto>;
}

import { TypeOfDocumentRequestDto } from "../../../../../application/dtos/typeOfDocument/request/typeOfDocumentRequest.dto";
import { TypeOfDocumentResponseDto } from "../../../../../application/dtos/typeOfDocument/response/typeOfDocumentResponsedto";

export interface ITypeOfDocumentCreateService {
  /**
   * Create typeOfDocument
   * @param request
   */
  create(request: TypeOfDocumentRequestDto): Promise<TypeOfDocumentResponseDto>;
}

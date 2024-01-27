import { TypeOfDocumentResponseDto } from '../../../../dtos/typeOfDocument/response/typeOfDocumentResponsedto';

export interface ITypeOfDocumentGetAllService {
  /**
   * getAll users
   */
  getAll(): Promise<TypeOfDocumentResponseDto[]>;
}

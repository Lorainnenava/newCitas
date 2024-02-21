import { TypeOfDocumentResponseDto } from '../../../../entities/typeOfDocument/dto/response/typeOfDocumentResponsedto';

export interface ITypeOfDocumentGetAllService {
  /**
   * getAll users
   */
  getAll(): Promise<TypeOfDocumentResponseDto[]>;
}

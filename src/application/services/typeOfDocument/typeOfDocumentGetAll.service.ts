import { Injectable } from '@nestjs/common';
import { TypeOfDocumentRepository } from '../../../infrastructure/repository/typeOfDocument/typeOfDocument.repository';
import { ITypeOfDocumentGetAllService } from '../../../domain/interfaces/service/typeOfDocument/getAll/ITypeOfDocumentGetAllService';
import { TypeOfDocumentResponseDto } from '../../../domain/dtos/typeOfDocument/response/typeOfDocumentResponsedto';

@Injectable()
export class TypeOfDocumentsGetAllService
  implements ITypeOfDocumentGetAllService
{
  constructor(
    private readonly typeOfDocumentRepository: TypeOfDocumentRepository,
  ) {}

  /**
   * getAll
   * @returns
   */
  async getAll(): Promise<TypeOfDocumentResponseDto[]> {
    try {
      return await this.typeOfDocumentRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}

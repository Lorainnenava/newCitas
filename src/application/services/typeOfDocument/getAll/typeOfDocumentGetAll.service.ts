import { Injectable } from '@nestjs/common';
import { TypeOfDocumentRepository } from '../../../../infrastructure/repository/typeOfDocument/typeOfDocument.repository';
import { TypeOfDocumentResponseDto } from '../../../../domain/entities/typeOfDocument/dto/response/typeOfDocumentResponsedto';
import { ITypeOfDocumentGetAllService } from '../../../../domain/interfaces/service/typeOfDocument/getAll/ITypeOfDocumentGetAllService';

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

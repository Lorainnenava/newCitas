import { Inject, Injectable } from '@nestjs/common';
import { TypeOfDocumentResponseDto } from '../../../../domain/entities/typeOfDocument/dto/response/typeOfDocumentResponsedto';
import { ITypeOfDocumentRepository } from '../../../../domain/interfaces/repository/typeOfDocument/ITypeOfDocument.repository';
import { ITypeOfDocumentsGetAllService } from '../../../../domain/interfaces/service/typeOfDocument/getAll/ITypeOfDocumentsGetAllService';

@Injectable()
export class TypeOfDocumentsGetAllService
  implements ITypeOfDocumentsGetAllService
{
  constructor(
    @Inject('TypeOfDocumentRepository')
    private readonly _typeOfDocumentRepository: ITypeOfDocumentRepository,
  ) {}

  /**
   * getAll
   * @returns
   */
  async getAll(): Promise<TypeOfDocumentResponseDto[]> {
    try {
      return await this._typeOfDocumentRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { TypeOfDocumentResponseDto } from 'src/domain/entities/typeOfDocument/dto/response/typeOfDocumentResponse.dto';
import { ITypeOfDocumentRepository } from 'src/domain/interfaces/infrastructure/typeOfDocument/ITypeOfDocument.repository';
import { ITypeOfDocumentsGetAllService } from 'src/domain/interfaces/services/typeOfDocument/getAll/ITypeOfDocumentsGetAllService';

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

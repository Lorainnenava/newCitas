import { Injectable } from '@nestjs/common';
import { TypeOfDocumentResponseDto } from '../../dtos/typeOfDocument/response/typeOfDocumentResponsedto';
import { TypeOfDocumentRepository } from '../../../infrastructure/repository/typeOfDocument/typeOfDocument.repository';
import { ITypeOfDocumentGetAllService } from '../../../domain/interfaces/service/typeOfDocument/getAll/ITypeOfDocumentGetAllService';

@Injectable()
export class TypeOfDocumentGetAllService
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

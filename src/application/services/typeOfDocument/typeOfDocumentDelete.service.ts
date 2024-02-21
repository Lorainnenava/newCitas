import { Injectable, NotFoundException } from '@nestjs/common';
import { TypeOfDocumentRepository } from '../../../infrastructure/repository/typeOfDocument/typeOfDocument.repository';
import { ITypeOfDocumentDeleteService } from '../../../domain/interfaces/service/typeOfDocument/delete/ITypeOfDocumentDeleteService';
import { TypeOfDocumentResponseDto } from '../../../domain/entities/typeOfDocument/dto/response/typeOfDocumentResponsedto';

@Injectable()
export class TypeOfDocumentDeleteService
  implements ITypeOfDocumentDeleteService
{
  constructor(
    private readonly typeOfDocumentRepository: TypeOfDocumentRepository,
  ) {}

  /**
   * delete
   * @param _id
   * @returns
   */
  async delete(_id: string): Promise<TypeOfDocumentResponseDto> {
    try {
      const deleteTypeOfDocument =
        await this.typeOfDocumentRepository.delete(_id);
      if (deleteTypeOfDocument === null)
        throw new NotFoundException('This typeOfDocument does not exist');
      return deleteTypeOfDocument;
    } catch (error) {
      throw error;
    }
  }
}

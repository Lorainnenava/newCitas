import { Injectable, Param, NotFoundException } from '@nestjs/common';
import { TypeOfDocumentResponseDto } from '../../dtos/typeOfDocument/response/typeOfDocumentResponsedto';
import { TypeOfDocumentRepository } from '../../../infrastructure/repository/typeOfDocument/typeOfDocument.repository';
import { ITypeOfDocumentDeleteService } from '../../../domain/interfaces/service/typeOfDocument/delete/ITypeOfDocumentDeleteService';

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
  async delete(@Param('_id') _id: string): Promise<TypeOfDocumentResponseDto> {
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

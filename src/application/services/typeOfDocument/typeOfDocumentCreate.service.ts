import { Injectable } from '@nestjs/common';
import { TypeOfDocumentRepository } from '../../../infrastructure/repository/typeOfDocument/typeOfDocument.repository';
import { ITypeOfDocumentCreateService } from '../../../domain/interfaces/service/typeOfDocument/create/ITypeOfDocumentCreateService';
import { TypeOfDocumentRequestDto } from '../../../domain/dtos/typeOfDocument/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../../domain/dtos/typeOfDocument/response/typeOfDocumentResponsedto';

@Injectable()
export class TypeOfDocumentCreateService
  implements ITypeOfDocumentCreateService
{
  constructor(
    private readonly typeOfDocumentRepository: TypeOfDocumentRepository,
  ) {}

  /**
   * create
   * @param request
   */
  async create(
    request: TypeOfDocumentRequestDto,
  ): Promise<TypeOfDocumentResponseDto> {
    try {
      return await this.typeOfDocumentRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}

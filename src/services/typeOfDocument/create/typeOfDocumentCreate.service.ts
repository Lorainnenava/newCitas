import { Inject, Injectable } from '@nestjs/common';
import { TypeOfDocumentRequestDto } from 'src/domain/entities/typeOfDocument/dto/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from 'src/domain/entities/typeOfDocument/dto/response/typeOfDocumentResponse.dto';
import { ITypeOfDocumentRepository } from 'src/domain/interfaces/infrastructure/typeOfDocument/ITypeOfDocument.repository';
import { ITypeOfDocumentCreateService } from 'src/domain/interfaces/services/typeOfDocument/create/ITypeOfDocumentCreateService';

@Injectable()
export class TypeOfDocumentCreateService
  implements ITypeOfDocumentCreateService
{
  constructor(
    @Inject('TypeOfDocumentRepository')
    private readonly _typeOfDocumentRepository: ITypeOfDocumentRepository,
  ) {}

  /**
   * create
   * @param request
   */
  async create(
    request: TypeOfDocumentRequestDto,
  ): Promise<TypeOfDocumentResponseDto> {
    try {
      return await this._typeOfDocumentRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}

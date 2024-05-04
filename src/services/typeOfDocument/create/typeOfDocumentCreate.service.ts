import { Inject, Injectable } from '@nestjs/common';
import { TypeOfDocumentRequestDto } from '../../../../domain/entities/typeOfDocument/dto/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../../../domain/entities/typeOfDocument/dto/response/typeOfDocumentResponse.dto';
import { ITypeOfDocumentRepository } from '../../../../domain/interfaces/repository/typeOfDocument/ITypeOfDocument.repository';
import { ITypeOfDocumentCreateService } from '../../../../domain/interfaces/service/typeOfDocument/create/ITypeOfDocumentCreateService';

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

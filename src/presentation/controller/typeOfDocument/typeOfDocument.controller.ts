import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/shared/guards';
import { TypeOfDocumentCreateService } from '../../../application/services/typeOfDocument/create/typeOfDocumentCreate.service';
import { TypeOfDocumentsGetAllService } from '../../../application/services/typeOfDocument/getAll/typeOfDocumentGetAll.service';
import { TypeOfDocumentRequestDto } from '../../../domain/entities/typeOfDocument/dto/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../../domain/entities/typeOfDocument/dto/response/typeOfDocumentResponse.dto';

@ApiTags('TypeOfDocument')
@Controller('typeOfDocument')
export class TypeOfDocumentController {
  constructor(
    private readonly typeOfDocumentCreateService: TypeOfDocumentCreateService,
    private readonly typeOfDocumentsGetAllService: TypeOfDocumentsGetAllService,
  ) {}

  /**
   * create typeOfDocument
   * @param request
   * @returns
   */
  @Public()
  @Post('/create')
  async create(
    @Body() request: TypeOfDocumentRequestDto,
  ): Promise<TypeOfDocumentResponseDto> {
    return this.typeOfDocumentCreateService.create(request);
  }

  /**
   * getAll typeOfDocuments
   * @returns
   */
  @Public()
  @Get('/getAll')
  async getAll(): Promise<TypeOfDocumentResponseDto[]> {
    return this.typeOfDocumentsGetAllService.getAll();
  }
}

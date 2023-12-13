import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Get, Post, Body, Param, Delete, Controller } from '@nestjs/common';
import { TypeOfDocumentService } from '../../../application/services/typeOfDocument/typeOfDocument.service';
import { TypeOfDocumentRequestDto } from '../../../application/dtos/typeOfDocument/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentResponseDto } from '../../../application/dtos/typeOfDocument/response/typeOfDocumentResponsedto';

@ApiTags('TypeOfDocument')
@Controller('TypeOfDocument')
export class TypeOfDocumentController {
  constructor(private readonly typeOfDocumentService: TypeOfDocumentService) { }

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
    return this.typeOfDocumentService.create(request);
  }

  /**
   * getAll typeOfDocuments
   * @returns
   */
  @Public()
  @Get('/GetAll')
  async getAll(): Promise<TypeOfDocumentResponseDto[]> {
    return this.typeOfDocumentService.getAll();
  }

  /**
   * delete typeOfDocument
   * @param _id
   * @returns
   */
  @Public()
  @Delete('/Delete/:_id')
  async delete(@Param('_id') _id: string): Promise<TypeOfDocumentResponseDto> {
    return await this.typeOfDocumentService.delete(_id);
  }
}

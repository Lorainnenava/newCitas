import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Get, Post, Body, Param, Delete, Controller } from '@nestjs/common';
import { TypeOfDocumentsGetAllService } from './../../../application/services/typeOfDocument/typeOfDocumentGetAll.service';
import { TypeOfDocumentDeleteService } from './../../../application/services/typeOfDocument/typeOfDocumentDelete.service';
import { TypeOfDocumentCreateService } from './../../../application/services/typeOfDocument/typeOfDocumentCreate.service';
import { TypeOfDocumentResponseDto } from '../../../domain/dtos/typeOfDocument/response/typeOfDocumentResponsedto';
import { TypeOfDocumentRequestDto } from '../../../domain/dtos/typeOfDocument/request/typeOfDocumentRequest.dto';

@ApiTags('TypeOfDocument')
@Controller('typeOfDocument')
export class TypeOfDocumentController {
  constructor(
    private readonly typeOfDocumentCreateService: TypeOfDocumentCreateService,
    private readonly typeOfDocumentDeleteService: TypeOfDocumentDeleteService,
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

  /**
   * delete typeOfDocument
   * @param _id
   * @returns
   */
  @Public()
  @Delete('/delete/:_id')
  async delete(@Param('_id') _id: string): Promise<TypeOfDocumentResponseDto> {
    return await this.typeOfDocumentDeleteService.delete(_id);
  }
}

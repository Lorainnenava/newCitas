import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Get, Post, Body, Param, Delete, Controller } from '@nestjs/common';
import { TypeOfDocumentRequestDto } from '../../../application/dtos/typeOfDocument/request/typeOfDocumentRequest.dto';
import { TypeOfDocumentGetAllService } from './../../../application/services/typeOfDocument/typeOfDocumentGetAll.service';
import { TypeOfDocumentDeleteService } from './../../../application/services/typeOfDocument/typeOfDocumentDelete.service';
import { TypeOfDocumentCreateService } from './../../../application/services/typeOfDocument/typeOfDocumentCreate.service';
import { TypeOfDocumentResponseDto } from '../../../application/dtos/typeOfDocument/response/typeOfDocumentResponsedto';

@ApiTags('TypeOfDocument')
@Controller('typeOfDocument')
export class TypeOfDocumentController {
  constructor(
    private readonly typeOfDocumentCreateService: TypeOfDocumentCreateService,
    private readonly typeOfDocumentDeleteService: TypeOfDocumentDeleteService,
    private readonly typeOfDocumentGetAllService: TypeOfDocumentGetAllService,
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
    return this.typeOfDocumentGetAllService.getAll();
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

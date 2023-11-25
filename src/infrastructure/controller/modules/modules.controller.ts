import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ModuleService } from '../../../application/modules/modules.service';
import { ModuleRequestDto } from '../../../domain/collections/modules/dto/request/modules/moduleRequest.dto';
import { ModuleResponseDto } from '../../../domain/collections/modules/dto/response/modules/moduleResponse.dto';

@ApiTags('Modules')
@Controller('Modules')
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  /**
   * create module
   * @param request
   * @returns
   */
  @Public()
  @Post('/create')
  async create(@Body() request: ModuleRequestDto): Promise<object> {
    return this.moduleService.create(request);
  }

  /**
   * getAll module
   * @returns
   */
  @Public()
  @Get('/GetAll')
  async getAll(): Promise<ModuleResponseDto[]> {
    return this.moduleService.getAll();
  }

  /**
   * update module
   * @param _id
   * @returns
   */
  @Public()
  @Put('/update/:_id')
  async update(
    @Body() request: ModuleRequestDto,
    @Param('_id') _id: string,
  ): Promise<ModuleResponseDto> {
    return this.moduleService.update(request, _id);
  }
}

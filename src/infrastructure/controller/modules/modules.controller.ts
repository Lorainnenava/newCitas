import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ModuleCreateService } from '../../../application/services/modules/modulesCreate.service';
import { ModuleUpdateService } from './../../../application/services/modules/modulesUpdate.service';
import { ModuleGetAllService } from './../../../application/services/modules/modulesGetAll.service';
import { ModuleRequestDto } from '../../../application/dtos/modules/request/modules/moduleRequest.dto';
import { ModuleResponseDto } from '../../../application/dtos/modules/response/modules/moduleResponse.dto';

@ApiTags('Modules')
@Controller('modules')
export class ModuleController {
  constructor(
    private readonly moduleCreateService: ModuleCreateService,
    private readonly moduleGetAllService: ModuleGetAllService,
    private readonly moduleUpdateService: ModuleUpdateService,
  ) {}

  /**
   * create module
   * @param request
   * @returns
   */
  @Public()
  @Post('/create')
  async create(@Body() request: ModuleRequestDto): Promise<object> {
    return this.moduleCreateService.create(request);
  }

  /**
   * getAll module
   * @returns
   */
  @Public()
  @Get('/getAll')
  async getAll(): Promise<ModuleResponseDto[]> {
    return this.moduleGetAllService.getAll();
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
    return this.moduleUpdateService.update(request, _id);
  }
}

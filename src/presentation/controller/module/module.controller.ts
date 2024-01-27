import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { ModuleCreateService } from '../../../application/services/module/moduleCreate.service';
import { ModulesGetAllService } from '../../../application/services/module/modulesGetAll.service';
import { ModuleUpdateService } from '../../../application/services/module/moduleUpdate.service';
import { ModuleRequestDto } from '../../../domain/dtos/module/request/module/moduleRequest.dto';
import { ModuleResponseDto } from '../../../domain/dtos/module/response/module/moduleResponse.dto';

@ApiTags('Module')
@Controller('module')
export class ModuleController {
  constructor(
    private readonly moduleCreateService: ModuleCreateService,
    private readonly modulesGetAllService: ModulesGetAllService,
    private readonly moduleUpdateService: ModuleUpdateService,
  ) {}

  /**
   * create module
   * @param request
   * @returns
   */
  @Public()
  @Post('/create')
  async create(@Body() request: ModuleRequestDto): Promise<ModuleResponseDto> {
    return this.moduleCreateService.create(request);
  }

  /**
   * getAll module
   * @returns
   */
  @Public()
  @Get('/getAll')
  async getAll(): Promise<ModuleResponseDto[]> {
    return this.modulesGetAllService.getAll();
  }

  /**
   * update module
   * @param request
   * @returns
   */
  @Public()
  @Put('/update')
  async update(@Body() request: ModuleRequestDto): Promise<ModuleResponseDto> {
    return this.moduleUpdateService.update(request);
  }
}

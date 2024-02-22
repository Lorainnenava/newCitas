import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RolCreateService } from '../../../application/services/rol/create/rolCreate.service';
import { RolesGetAllService } from '../../../application/services/rol/getAll/rolesGetAll.service';
import { RolRequestDto } from '../../../domain/entities/rol/dto/request/rolRequest.dto';
import { RolResponseDto } from '../../../domain/entities/rol/dto/response/rolResponse.dto';

@ApiTags('Rol')
@Controller('rol')
export class RolController {
  constructor(
    private readonly rolCreateService: RolCreateService,
    private readonly rolesGetAllService: RolesGetAllService,
  ) {}

  /**
   * create
   * @param request
   * @returns
   */
  @Public()
  @Post('/create')
  async create(@Body() request: RolRequestDto): Promise<RolResponseDto> {
    return this.rolCreateService.create(request);
  }

  /**
   * getAll roles
   * @returns
   */
  @Public()
  @Get('/getAll')
  async getAll(): Promise<RolResponseDto[]> {
    return this.rolesGetAllService.getAll();
  }
}

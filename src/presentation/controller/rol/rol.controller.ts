import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolCreateService } from 'src/services/rol/create/rolCreate.service';
import { RolesGetAllService } from 'src/services/rol/getAll/rolesGetAll.service';
import { Public } from 'src/shared/guards';
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

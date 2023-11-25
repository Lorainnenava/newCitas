import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RolesService } from '../../../application/roles/role.service';
import { RolesRequestDto } from '../../../domain/collections/roles/dto/request/rolesRequest.dto';
import { RolesResponseDto } from '../../../domain/collections/roles/dto/response/rolesResponse.dto';

@ApiTags('Roles')
@Controller('Roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  /**
   * create
   * @param request
   * @returns
   */
  @Public()
  @Post('/create')
  async create(@Body() request: RolesRequestDto): Promise<RolesResponseDto> {
    return this.roleService.create(request);
  }

  /**
   * getAll roles
   * @returns
   */
  @Public()
  @Get('/GetAll')
  async getAll(): Promise<RolesResponseDto[]> {
    return this.roleService.getAll();
  }
  /**
   * delete roles
   * @param _id
   * @returns
   */
  @Public()
  @Delete('/Delete/:_id')
  async delete(@Param('_id') _id: string): Promise<RolesResponseDto> {
    return this.roleService.delete(_id);
  }
}

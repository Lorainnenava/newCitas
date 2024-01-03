import { Public } from '../../../utils';
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RolesRequestDto } from '../../../application/dtos/roles/request/rolesRequest.dto';
import { RolesCreateService } from '../../../application/services/roles/roleCreate.service';
import { RolesGetAllService } from '../../../application/services/roles/roleGetAll.service';
import { RolesDeleteService } from '../../../application/services/roles/roleDelete.service';
import { RolesResponseDto } from '../../../application/dtos/roles/response/rolesResponse.dto';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(
    private readonly rolesCreateService: RolesCreateService,
    private readonly rolesGetAllService: RolesGetAllService,
    private readonly rolesDeleteService: RolesDeleteService,
  ) {}

  /**
   * create
   * @param request
   * @returns
   */
  @Public()
  @Post('/create')
  async create(@Body() request: RolesRequestDto): Promise<RolesResponseDto> {
    return this.rolesCreateService.create(request);
  }

  /**
   * getAll roles
   * @returns
   */
  @Public()
  @Get('/getAll')
  async getAll(): Promise<RolesResponseDto[]> {
    return this.rolesGetAllService.getAll();
  }

  /**
   * delete roles
   * @param _id
   * @returns
   */
  @Public()
  @Delete('/delete/:_id')
  async delete(@Param('_id') _id: string): Promise<RolesResponseDto> {
    return this.rolesDeleteService.delete(_id);
  }
}

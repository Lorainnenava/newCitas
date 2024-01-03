import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PermissionsRequestDto } from '../../../application/dtos/permissions/request/permissionsRequest.dto';
import { PermissionUpdateService } from './../../../application/services/permissions/permissionsUpdate.service';
import { PermissionsResponseDto } from '../../../application/dtos/permissions/response/permissionsResponse.dto';
import { PermissionCreateService } from './../../../application/services/permissions/permissionsCreate.service';
import { PermissionGetAllByRoleService } from './../../../application/services/permissions/permissionsGetAllByRole.service';

@ApiTags('Permissions')
@Controller('permissions')
export class PermissionController {
  constructor(
    private readonly permissionCreateService: PermissionCreateService,
    private readonly permissionUpdateService: PermissionUpdateService,
    private readonly permissionGetAllByRoleService: PermissionGetAllByRoleService,
  ) {}

  /**
   * create
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/create')
  @Roles(Role.ADMIN)
  async create(
    @Body() request: PermissionsRequestDto,
  ): Promise<PermissionsResponseDto[]> {
    return this.permissionCreateService.create(request);
  }

  /**
   * getAllByRole
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/getAllByRole')
  @Roles(Role.ADMIN)
  async getAllByRole(@Body() role: string): Promise<PermissionsResponseDto[]> {
    return this.permissionGetAllByRoleService.getAllByRole(role);
  }
  /**
   * update
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/update')
  @Roles(Role.ADMIN)
  async update(
    @Body() request: PermissionsRequestDto,
  ): Promise<PermissionsResponseDto[]> {
    return this.permissionUpdateService.update(request);
  }
}

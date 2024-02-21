import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PermissionsCreateService } from '../../../application/services/permissions/permissionsCreate.service';
import { PermissionsUpdateService } from '../../../application/services/permissions/permissionsUpdate.service';
import { PermissionsGetAllByRoleService } from '../../../application/services/permissions/permissionsGetAllByRole.service';
import { PermissionRequestDto } from '../../../domain/entities/permission/dto/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../domain/entities/permission/dto/response/permissionResponse.dto';

@ApiTags('Permissions')
@Controller('permissions')
export class PermissionController {
  constructor(
    private readonly permissionsCreateService: PermissionsCreateService,
    private readonly permissionsUpdateService: PermissionsUpdateService,
    private readonly permissionsGetAllByRoleService: PermissionsGetAllByRoleService,
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
    @Body() request: PermissionRequestDto,
  ): Promise<PermissionResponseDto[]> {
    return this.permissionsCreateService.create(request);
  }

  /**
   * getAllByRole
   * @param request
   * @returns
   */
  @ApiBearerAuth('token')
  @Post('/getAllByRole')
  @Roles(Role.ADMIN)
  async getAllByRole(@Body() role: string): Promise<PermissionResponseDto[]> {
    return this.permissionsGetAllByRoleService.getAllByRole(role);
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
    @Body() request: PermissionRequestDto,
  ): Promise<PermissionResponseDto[]> {
    return this.permissionsUpdateService.update(request);
  }
}

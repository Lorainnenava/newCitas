import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PermissionsCreateService } from 'src/services/permissions/create/permissionsCreate.service';
import { PermissionsGetAllByRoleService } from 'src/services/permissions/getAlByRole/permissionsGetAllByRole.service';
import { PermissionsUpdateService } from 'src/services/permissions/update/permissionsUpdate.service';
import { Role } from 'src/shared/guards/roles/role.enum';
import { Roles } from 'src/shared/guards/roles/roles';
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

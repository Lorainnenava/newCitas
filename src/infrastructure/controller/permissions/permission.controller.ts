import { Roles } from '../../../utils/roles/roles';
import { Role } from '../../../utils/roles/role.enum';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PermissionService } from '../../../application/services/permissions/permissions.service';
import { PermissionsRequestDto } from '../../../application/dtos/permissions/request/permissionsRequest.dto';
import { PermissionsResponseDto } from '../../../application/dtos/permissions/response/permissionsResponse.dto';

@ApiTags('Permissions')
@Controller('Permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

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
    return this.permissionService.create(request);
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
    return this.permissionService.getAllByRole(role);
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
    return this.permissionService.update(request);
  }
}

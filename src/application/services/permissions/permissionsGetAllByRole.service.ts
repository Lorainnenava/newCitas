import { Injectable } from '@nestjs/common';
import { PermissionsResponseDto } from '../../dtos/permissions/response/permissionsResponse.dto';
import { PermissionRepository } from '../../../infrastructure/repository/permissions/permissions.repository';
import { IPermissionsGetAllByRoleService } from '../../../domain/interfaces/service/permissions/getAllByRole/IPermissionsGetAllByRoleService';

@Injectable()
export class PermissionGetAllByRoleService
  implements IPermissionsGetAllByRoleService
{
  constructor(private readonly permissionRepository: PermissionRepository) {}

  /**
   * getAllByRole permissions
   * @param request
   * @returns
   */
  async getAllByRole(role: string): Promise<PermissionsResponseDto[]> {
    try {
      return await this.permissionRepository.getByRole(role);
    } catch (error) {
      throw error;
    }
  }
}

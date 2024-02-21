import { Injectable } from '@nestjs/common';
import { PermissionRepository } from '../../../infrastructure/repository/permission/permission.repository';
import { IPermissionsGetAllByRoleService } from '../../../domain/interfaces/service/permission/getAllByRole/IPermissionsGetAllByRoleService';
import { PermissionResponseDto } from '../../../domain/entities/permission/dto/response/permissionResponse.dto';

@Injectable()
export class PermissionsGetAllByRoleService
  implements IPermissionsGetAllByRoleService
{
  constructor(private readonly permissionRepository: PermissionRepository) {}

  /**
   * getAllByRole permissions
   * @param request
   * @returns
   */
  async getAllByRole(role: string): Promise<PermissionResponseDto[]> {
    try {
      return await this.permissionRepository.getByRole(role);
    } catch (error) {
      throw error;
    }
  }
}

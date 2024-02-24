import { Inject, Injectable } from '@nestjs/common';
import { PermissionResponseDto } from '../../../../domain/entities/permission/dto/response/permissionResponse.dto';
import { IPermissionRepository } from '../../../../domain/interfaces/repository/permission/IPermission.repository';
import { IPermissionsGetAllByRoleService } from '../../../../domain/interfaces/service/permission/getAllByRole/IPermissionsGetAllByRoleService';

@Injectable()
export class PermissionsGetAllByRoleService
  implements IPermissionsGetAllByRoleService
{
  constructor(
    @Inject('PermissionRepository')
    private readonly _permissionRepository: IPermissionRepository,
  ) {}

  /**
   * getAllByRole permissions
   * @param request
   * @returns
   */
  async getAllByRole(role: string): Promise<PermissionResponseDto[]> {
    try {
      return await this._permissionRepository.getAll({ role });
    } catch (error) {
      throw error;
    }
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { PermissionResponseDto } from 'src/domain/entities/permission/dto/response/permissionResponse.dto';
import { IPermissionRepository } from 'src/domain/interfaces/infrastructure/permission/IPermission.repository';
import { IPermissionsGetAllByRoleService } from 'src/domain/interfaces/services/permission/getAllByRole/IPermissionsGetAllByRoleService';

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

import { PermissionResponseDto } from '../../../../entities/permission/dto/response/permissionResponse.dto';

export interface IPermissionsGetAllByRoleService {
  /**
   * getAllByRole Permissions
   */
  getAllByRole(role: string): Promise<PermissionResponseDto[]>;
}

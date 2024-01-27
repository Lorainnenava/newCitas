import { PermissionResponseDto } from '../../../../dtos/permission/response/permissionResponse.dto';

export interface IPermissionsGetAllByRoleService {
  /**
   * getAllByRole Permissions
   */
  getAllByRole(role: string): Promise<PermissionResponseDto[]>;
}

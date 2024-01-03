import { PermissionsResponseDto } from '../../../../../application/dtos/permissions/response/permissionsResponse.dto';

export interface IPermissionsGetAllByRoleService {
  /**
   * getAllByRole Permissions
   */
  getAllByRole(role: string): Promise<PermissionsResponseDto[]>;
}

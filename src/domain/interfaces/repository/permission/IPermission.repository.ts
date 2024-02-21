import { PermissionRequestDto } from '../../../entities/permission/dto/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../entities/permission/dto/response/permissionResponse.dto';

export interface IPermissionRepository {
  /**
   * create Permission
   * @param request
   */
  create(request: PermissionRequestDto): Promise<PermissionResponseDto[]>;

  /**
   * getByRole Permissions
   */
  getByRole(role: string): Promise<PermissionResponseDto[]>;

  /**
   * update Permission
   * @param _id
   */
  update(request: PermissionRequestDto): Promise<PermissionResponseDto[]>;
}

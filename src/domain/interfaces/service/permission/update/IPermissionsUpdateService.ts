import { PermissionRequestDto } from '../../../../dtos/permission/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../../dtos/permission/response/permissionResponse.dto';

export interface IPermissionsUpdateService {
  /**
   * update Permissions
   * @param _id
   */
  update(request: PermissionRequestDto): Promise<PermissionResponseDto[]>;
}

import { PermissionRequestDto } from '../../../../dtos/permission/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../../dtos/permission/response/permissionResponse.dto';

export interface IPermissionsCreateService {
  /**
   * create Permissions
   * @param request
   */
  create(request: PermissionRequestDto): Promise<PermissionResponseDto[]>;
}

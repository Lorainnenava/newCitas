import { PermissionRequestDto } from '../../../../entities/permission/dto/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../../entities/permission/dto/response/permissionResponse.dto';

export interface IPermissionsCreateService {
  /**
   * create Permissions
   * @param request
   */
  create(request: PermissionRequestDto): Promise<PermissionResponseDto[]>;
}

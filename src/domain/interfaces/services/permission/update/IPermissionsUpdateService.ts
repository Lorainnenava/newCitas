import { PermissionRequestDto } from '../../../../entities/permission/dto/request/permissionRequest.dto';
import { PermissionResponseDto } from '../../../../entities/permission/dto/response/permissionResponse.dto';

export interface IPermissionsUpdateService {
  /**
   * update Permissions
   * @param _id
   */
  update(request: PermissionRequestDto): Promise<PermissionResponseDto[]>;
}

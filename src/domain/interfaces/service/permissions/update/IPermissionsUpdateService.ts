import { PermissionsRequestDto } from '../../../../../application/dtos/permissions/request/permissionsRequest.dto';
import { PermissionsResponseDto } from '../../../../../application/dtos/permissions/response/permissionsResponse.dto';

export interface IPermissionsUpdateService {
  /**
   * update Permissions
   * @param _id
   */
  update(request: PermissionsRequestDto): Promise<PermissionsResponseDto[]>;
}

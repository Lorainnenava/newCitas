import { PermissionsRequestDto } from '../../../../../application/dtos/permissions/request/permissionsRequest.dto';
import { PermissionsResponseDto } from '../../../../../application/dtos/permissions/response/permissionsResponse.dto';

export interface IPermissionsCreateService {
  /**
   * create Permissions
   * @param request
   */
  create(request: PermissionsRequestDto): Promise<PermissionsResponseDto[]>;
}

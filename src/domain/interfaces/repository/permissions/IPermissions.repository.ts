import { PermissionsRequestDto } from '../../../../application/dtos/permissions/request/permissionsRequest.dto';
import { PermissionsResponseDto } from '../../../../application/dtos/permissions/response/permissionsResponse.dto';

export interface IPermissionsRepository {
  /**
   * create Permissions
   * @param request
   */
  create(request: PermissionsRequestDto): Promise<PermissionsResponseDto[]>;

  /**
   * getAllByRole Permissions
   */
  getAllByRole(role: string): Promise<PermissionsResponseDto[]>;

  /**
   * update Permissions
   * @param _id
   */
  update(request: PermissionsRequestDto): Promise<PermissionsResponseDto[]>;
}

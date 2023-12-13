import { RolesRequestDto } from '../../../../application/dtos/roles/request/rolesRequest.dto';
import { RolesResponseDto } from '../../../../application/dtos/roles/response/rolesResponse.dto';

export interface IRolesRepository {
  /**
   * create role
   * @param request
   */
  create(request: RolesRequestDto): Promise<RolesResponseDto>;

  /**
   * getAll roles
   */
  getAll(): Promise<RolesResponseDto[]>;

  /**
   * delete role
   * @param _id
   */
  delete(_id: string): Promise<RolesResponseDto>;
}

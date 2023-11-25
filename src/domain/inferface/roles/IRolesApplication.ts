import { RolesRequestDto } from '../../collections/roles/dto/request/rolesRequest.dto';
import { RolesResponseDto } from '../../collections/roles/dto/response/rolesResponse.dto';

export interface IRolesApplication {
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

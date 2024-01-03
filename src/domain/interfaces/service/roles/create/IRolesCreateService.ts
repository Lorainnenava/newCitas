import { RolesRequestDto } from '../../../../../application/dtos/roles/request/rolesRequest.dto';
import { RolesResponseDto } from '../../../../../application/dtos/roles/response/rolesResponse.dto';

export interface IRolesCreateService {
  /**
   * create role
   * @param request
   */
  create(request: RolesRequestDto): Promise<RolesResponseDto>;
}

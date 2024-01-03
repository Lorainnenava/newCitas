import { RolesResponseDto } from '../../../../../application/dtos/roles/response/rolesResponse.dto';

export interface IRolesGetAllService {
  /**
   * getAll roles
   */
  getAll(): Promise<RolesResponseDto[]>;
}

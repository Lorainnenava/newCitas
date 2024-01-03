import { RolesResponseDto } from '../../../../../application/dtos/roles/response/rolesResponse.dto';

export interface IRolesDeleteService {
  /**
   * delete role
   * @param _id
   */
  delete(_id: string): Promise<RolesResponseDto>;
}

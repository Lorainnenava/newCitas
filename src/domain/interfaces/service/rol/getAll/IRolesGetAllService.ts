import { RolResponseDto } from '../../../../dtos/rol/response/rolResponse.dto';

export interface IRolesGetAllService {
  /**
   * getAll roles
   */
  getAll(): Promise<RolResponseDto[]>;
}

import { RolResponseDto } from '../../../../entities/rol/dto/response/rolResponse.dto';

export interface IRolesGetAllService {
  /**
   * getAll roles
   */
  getAll(): Promise<RolResponseDto[]>;
}

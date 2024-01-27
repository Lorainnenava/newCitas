import { RolRequestDto } from '../../../../dtos/rol/request/rolRequest.dto';
import { RolResponseDto } from '../../../../dtos/rol/response/rolResponse.dto';

export interface IRolCreateService {
  /**
   * create rol
   * @param request
   */
  create(request: RolRequestDto): Promise<RolResponseDto>;
}

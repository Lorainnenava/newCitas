import { RolRequestDto } from '../../../../entities/rol/dto/request/rolRequest.dto';
import { RolResponseDto } from '../../../../entities/rol/dto/response/rolResponse.dto';

export interface IRolCreateService {
  /**
   * create rol
   * @param request
   */
  create(request: RolRequestDto): Promise<RolResponseDto>;
}

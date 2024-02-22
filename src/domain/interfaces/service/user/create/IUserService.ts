import { UserRequestDto } from '../../../../entities/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from '../../../../entities/user/dto/response/user/userResponse.dto';

export interface IUserCreateService {
  /**
   * method Create
   * @param request
   */
  create(request: UserRequestDto): Promise<UserResponseDto>;
}

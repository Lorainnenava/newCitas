import { UserRequestDto } from '../../../../entities/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from '../../../../entities/user/dto/response/user/userResponse.dto';

export interface IUserSignUpService {
  /**
   * method signUp
   * @param request
   */
  signUp(request: UserRequestDto): Promise<UserResponseDto>;
}

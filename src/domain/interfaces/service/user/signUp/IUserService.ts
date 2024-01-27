import { UserRequestDto } from '../../../../dtos/user/request/user/userRequest.dto';
import { UserResponseDto } from '../../../../dtos/user/response/user/userResponse.dto';

export interface IUserSignUpService {
  /**
   * method signUp
   * @param request
   */
  signUp(request: UserRequestDto): Promise<UserResponseDto>;
}

import { UserResponseDto } from '../../../../entities/user/dto/response/user/userResponse.dto';

export interface IUserDeleteTokenService {
  /**
   * method deleteToken
   */
  deleteToken(token: string): Promise<UserResponseDto>;
}

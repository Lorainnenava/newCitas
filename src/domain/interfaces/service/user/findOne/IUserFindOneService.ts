import { UserResponseDto } from '../../../../entities/user/dto/response/user/userResponse.dto';

export interface IUserFindOneService {
  /**
   * method findOne
   * @param email
   */
  findOne(email: string): Promise<UserResponseDto>;
}

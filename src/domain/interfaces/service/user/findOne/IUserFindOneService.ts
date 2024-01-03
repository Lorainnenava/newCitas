import { UserResponseDto } from '../../../../../application/dtos/user/response/user/userResponse.dto';

export interface IUserFindOneService {
  /**
   * method findOne
   * @param email
   */
  findOne(email: string): Promise<UserResponseDto>;
}

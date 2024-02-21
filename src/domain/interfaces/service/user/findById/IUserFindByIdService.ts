import { UserResponseDto } from '../../../../entities/user/dto/response/user/userResponse.dto';

export interface IUserFindByIdService {
  /**
   * method findById
   * @param _id
   */
  findById(_id: string): Promise<UserResponseDto>;
}

import { UserResponseDto } from '../../../../entities/user/dto/response/user/userResponse.dto';

export interface IUserGetAllService {
  /**
   * method getAll
   */
  getAll(): Promise<UserResponseDto[]>;
}

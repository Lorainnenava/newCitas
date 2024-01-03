import { UserResponseDto } from '../../../../../application/dtos/user/response/user/userResponse.dto';

export interface IUserGetAllService {
  /**
   * method getAll
   */
  getAll(): Promise<UserResponseDto[]>;
}

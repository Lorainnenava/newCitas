import { UserRequestDto } from '../../collections/user/dto/request/userRequest.dto';
import { UserResponseDto } from '../../collections/user/dto/response/userResponse.dto';

export interface IUserApplication {
  /**
   * method signUp
   * @param userDto
   */
  signUp(userDto: UserRequestDto): Promise<UserResponseDto>;

  /**
   * method findOne
   * @param email
   */
  findOne?(email: string): Promise<UserResponseDto>;

  /**
   * method findById
   * @param id
   */
  findById?(id: string): Promise<UserResponseDto>;

  /**
   * method getAll
   */
  getAll?(): Promise<UserResponseDto[]>;
}

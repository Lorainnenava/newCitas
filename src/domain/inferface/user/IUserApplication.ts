import { UserRequestDto } from 'src/domain/collections/user/dto/request/userRequest.dto';
import { UserResponseDto } from 'src/domain/collections/user/dto/response/userResponse.dto';

export interface IUserApplication {
  signUp(userDto: UserRequestDto): Promise<UserResponseDto>;

  findOne?(email: string): Promise<UserResponseDto>;

  findById?(id: string): Promise<UserResponseDto>;
}

import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/application/user/user.service';
import { UserRequestDto } from 'src/domain/collections/user/dto/request/userRequest.dto';
import { UserResponseDto } from 'src/domain/collections/user/dto/response/userResponse.dto';

@ApiTags('SignUp')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * SignUp
   * @param userDto
   * @returns
   */
  @Post('/SignUp')
  async signUp(@Body() userDto: UserRequestDto): Promise<UserResponseDto> {
    return this.userService.signUp(userDto);
  }
}

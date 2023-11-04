import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from '../../../application/user/user.service';
import { Public } from '../../../utils';
import { UserRequestDto } from '../../../domain/collections/user/dto/request/userRequest.dto';
import { UserResponseDto } from '../../../domain/collections/user/dto/response/userResponse.dto';

@ApiTags('SignUp')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * SignUp
   * @param userDto
   * @returns
   */
  @Public()
  @Post('/SignUp')
  async signUp(@Body() userDto: UserRequestDto): Promise<UserResponseDto> {
    return this.userService.signUp(userDto);
  }

  /**
   * GetAll
   * @returns
   */
  @Public()
  @Get('/GetAll')
  async getAll(): Promise<UserResponseDto[]> {
    return this.userService.getAll();
  }
}

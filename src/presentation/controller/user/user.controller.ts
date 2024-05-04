import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/shared/guards';
import { UserCreateService } from '../../../application/services/user/create/userCreate.service';
import { UserDeleteTokenService } from '../../../application/services/user/deleteToken/userDeleteToken.service';
import { UserRequestDto } from '../../../domain/entities/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from '../../../domain/entities/user/dto/response/user/userResponse.dto';

@ApiTags('User')
@Controller()
export class UserController {
  constructor(
    private readonly userCreateService: UserCreateService,
    private readonly userDeleteTokenService: UserDeleteTokenService,
  ) {}

  /**
   * Create
   * @param userDto
   * @returns
   */
  @Public()
  @Post('/Create')
  async Create(@Body() userDto: UserRequestDto): Promise<UserResponseDto> {
    return this.userCreateService.create(userDto);
  }

  /**
   * Delete token from users
   * @returns
   */
  @Public()
  @Put('user/activateCount/:token')
  async deleteToken(@Param('token') token: string): Promise<UserResponseDto> {
    return await this.userDeleteTokenService.deleteToken(token);
  }
}

import { Get, Put, Body, Post, Param, Controller } from '@nestjs/common';
import { Public } from '../../../utils';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserCreateService } from '../../../application/services/user/create/userCreate.service';
import { UserGetAllService } from '../../../application/services/user/getAll/userGetAll.service';
import { UserDeleteTokenService } from '../../../application/services/user/deleteToken/userDeleteToken.service';
import { UserRequestDto } from '../../../domain/entities/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from '../../../domain/entities/user/dto/response/user/userResponse.dto';

@ApiTags('User')
@Controller()
export class UserController {
  constructor(
    private readonly userCreateService: UserCreateService,
    private readonly userGetAllService: UserGetAllService,
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
   * GetAll users
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('user/getAll')
  async getAll(): Promise<UserResponseDto[]> {
    return this.userGetAllService.getAll();
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

import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Controller,
  NotFoundException,
} from '@nestjs/common';
import { Public } from '../../../utils';
import { UpdateWriteOpResult } from 'mongoose';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UserService } from '../../../application/user/user.service';
import { UserRequestDto } from '../../../domain/collections/user/dto/request/user/userRequest.dto';
import { UserResponseDto } from '../../../domain/collections/user/dto/response/user/userResponse.dto';

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
   * GetAll users
   * @returns
   */
  @ApiBearerAuth('token')
  @Get('User/GetAll')
  async getAll(): Promise<UserResponseDto[]> {
    return this.userService.getAll();
  }

  /**
   * Delete token from users
   * @returns
   */
  @Public()
  @Put('User/ActivateCount/:token')
  async deleteToken(
    @Param('token') token: string,
  ): Promise<NotFoundException | UpdateWriteOpResult> {
    return await this.userService.deleteToken(token);
  }
}

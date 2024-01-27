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
import { UserSignUpService } from '../../../application/services/user/userSignUp.service';
import { UserGetAllService } from './../../../application/services/user/userGetAll.service';
import { UserDeleteTokenService } from './../../../application/services/user/userDeleteToken.service';
import { UserRequestDto } from '../../../domain/dtos/user/request/user/userRequest.dto';
import { UserResponseDto } from '../../../domain/dtos/user/response/user/userResponse.dto';

@ApiTags('User')
@Controller()
export class UserController {
  constructor(
    private readonly userSignUpService: UserSignUpService,
    private readonly userGetAllService: UserGetAllService,
    private readonly userDeleteTokenService: UserDeleteTokenService,
  ) {}

  /**
   * SignUp
   * @param userDto
   * @returns
   */
  @Public()
  @Post('/signUp')
  async signUp(@Body() userDto: UserRequestDto): Promise<UserResponseDto> {
    return this.userSignUpService.signUp(userDto);
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
  async deleteToken(
    @Param('token') token: string,
  ): Promise<NotFoundException | UpdateWriteOpResult> {
    return await this.userDeleteTokenService.deleteToken(token);
  }
}

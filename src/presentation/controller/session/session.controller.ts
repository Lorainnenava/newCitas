import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { SessionDeleteService } from 'src/services/session/delete/sessionDelete.service';
import { SessionGetOneService } from 'src/services/session/getOne/sessionFind.service';
import { LoginService } from 'src/services/session/login/login.service';
import { Public } from 'src/shared/guards';
import { RequestUser } from 'src/shared/interface/types';
import { LoginRequestDto } from '../../../domain/entities/session/dto/request/login/loginRequest.dto';
import { SessionResponseDto } from '../../../domain/entities/session/dto/response/sessionResponse.dto';

@ApiTags('Session')
@Controller()
export class SessionController {
  constructor(
    private readonly sessionGetOne: SessionGetOneService,
    private readonly loginService: LoginService,
    private readonly sessionDeleteService: SessionDeleteService,
  ) {}

  /**
   * findSession
   * @param request
   * @returns
   */
  @Get('session')
  @ApiBearerAuth('token')
  async findOne(@Req() request: Request): Promise<SessionResponseDto | object> {
    const user = request['user'] as RequestUser;
    return await this.sessionGetOne.findOne(user?.email);
  }

  /**
   * Login
   * @param request
   * @returns
   */
  @Public()
  @Post('signIn')
  async signIn(@Body() request: LoginRequestDto): Promise<object> {
    return this.loginService.login(request);
  }

  /**
   * Delete sessions
   * @param token
   * @returns
   */
  @Delete('session/delete/:token')
  @ApiBearerAuth('token')
  async delete(@Param('token') token: string): Promise<SessionResponseDto> {
    return await this.sessionDeleteService.delete(token);
  }
}

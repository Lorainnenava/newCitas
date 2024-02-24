import { Request } from 'express';
import { Public } from '../../../utils';
import { RequestUser } from '../../../utils/types';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { LoginService } from '../../../application/services/session/login/login.service';
import { LoginRequestDto } from '../../../domain/entities/session/dto/request/login/loginRequest.dto';
import { SessionResponseDto } from '../../../domain/entities/session/dto/response/sessionResponse.dto';
import { SessionGetOneService } from '../../../application/services/session/getOne/sessionFind.service';

@ApiTags('Session')
@Controller('session')
export class SessionController {
  constructor(
    private readonly sessionGetOne: SessionGetOneService,
    private readonly loginService: LoginService,
  ) {}

  /**
   * findSession
   * @param request
   * @returns
   */
  @Get()
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
  @Post()
  async signIn(@Body() request: LoginRequestDto): Promise<object> {
    return this.loginService.login(request);
  }
}

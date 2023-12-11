import { Request } from 'express';
import { RequestUser } from '../../../utils/types';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Delete, Param, Get, Req } from '@nestjs/common';
import { SessionService } from '../../../application/session/session.service';
import { SessionResponseDto } from '../../../domain/collections/session/dto/response/sessionResponse.dto';

@ApiTags('Session')
@Controller('Session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) { }

  /**
   * Delete sessions
   * @param token
   * @returns
   */
  @Delete('/:token')
  @ApiBearerAuth('token')
  async delete(@Param('token') token: string): Promise<SessionResponseDto> {
    return await this.sessionService.delete(token);
  }

  /**
   * findSession
   * @param request
   * @returns
   */
  @Get()
  @ApiBearerAuth('token')
  async findOne(@Req() request: Request): Promise<SessionResponseDto | object> {
    const user = request['user'] as RequestUser;
    return await this.sessionService.findSession(user?.email);
  }
}

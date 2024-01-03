import { Request } from 'express';
import { RequestUser } from '../../../utils/types';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Delete, Param, Get, Req } from '@nestjs/common';
import { SessionResponseDto } from '../../../application/dtos/session/response/sessionResponse.dto';
import { SessionDeleteService } from '../../../application/services/session/sessionDelete.service';
import { SessionFindSessionService } from '../../../application/services/session/sessionFindSession.service';

@ApiTags('Session')
@Controller('session')
export class SessionController {
  constructor(
    private readonly sessionDeleteService: SessionDeleteService,
    private readonly sessionFindSessionService: SessionFindSessionService,
  ) {}

  /**
   * Delete sessions
   * @param token
   * @returns
   */
  @Delete('/:token')
  @ApiBearerAuth('token')
  async delete(@Param('token') token: string): Promise<SessionResponseDto> {
    return await this.sessionDeleteService.delete(token);
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
    return await this.sessionFindSessionService.findSession(user?.email);
  }
}

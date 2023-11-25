import { Request } from 'express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Controller, Delete, Param, Get, Req } from '@nestjs/common';
import { SessionService } from '../../../application/session/session.service';
import { SessionResponseDto } from '../../../domain/collections/session/dto/response/sessionResponse.dto';
import { RequestUser } from '../../../utils/types';

@ApiTags('Session')
@Controller('Session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  /**
   * Delete sessions
   * @param _id
   * @returns
   */
  @Delete('/:_id')
  @ApiBearerAuth('token')
  async delete(@Param('_id') _id: string): Promise<SessionResponseDto> {
    return await this.sessionService.delete(_id);
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

import { Body, Injectable } from '@nestjs/common';
import { SessionRequestDto } from '../../dtos/session/request/sessionRequest.dto';
import { SessionResponseDto } from '../../dtos/session/response/sessionResponse.dto';
import { SessionRepository } from '../../../infrastructure/repository/session/session.repository';
import { ISessionCreateService } from '../../../domain/interfaces/service/session/create/ISessionCreateService';

@Injectable()
export class SessionCreateService implements ISessionCreateService {
  constructor(private readonly sessionRepository: SessionRepository) {}

  /**
   * Create session
   * @param request
   * @returns
   */
  async create(
    @Body() request: SessionRequestDto,
  ): Promise<SessionResponseDto> {
    try {
      return await this.sessionRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}

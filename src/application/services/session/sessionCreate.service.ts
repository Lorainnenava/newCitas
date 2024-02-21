import { Injectable } from '@nestjs/common';
import { SessionRepository } from '../../../infrastructure/repository/session/session.repository';
import { ISessionCreateService } from '../../../domain/interfaces/service/session/create/ISessionCreateService';
import { SessionRequestDto } from '../../../domain/entities/session/dto/request/session/sessionRequest.dto';
import { SessionResponseDto } from '../../../domain/entities/session/dto/response/sessionResponse.dto';

@Injectable()
export class SessionCreateService implements ISessionCreateService {
  constructor(private readonly sessionRepository: SessionRepository) {}

  /**
   * Create session
   * @param request
   * @returns
   */
  async create(request: SessionRequestDto): Promise<SessionResponseDto> {
    try {
      return await this.sessionRepository.create(request);
    } catch (error) {
      throw error;
    }
  }
}

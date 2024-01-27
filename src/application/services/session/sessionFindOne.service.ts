import { Injectable } from '@nestjs/common';
import { SessionRepository } from '../../../infrastructure/repository/session/session.repository';
import { ISessionFindOneService } from '../../../domain/interfaces/service/session/findOne/ISessionFindOneService';
import { SessionResponseDto } from '../../../domain/dtos/session/response/sessionResponse.dto';

@Injectable()
export class SessionFindOneService implements ISessionFindOneService {
  constructor(private readonly sessionRepository: SessionRepository) {}

  /**
   * Search session
   * @param email
   * @returns
   */
  async findOne(email: string): Promise<SessionResponseDto> {
    try {
      return await this.sessionRepository.findOne(email);
    } catch (error) {
      throw error;
    }
  }
}

import { NotFoundException, Injectable } from '@nestjs/common';
import { SessionRepository } from '../../../../infrastructure/repository/session/session.repository';
import { SessionResponseDto } from '../../../../domain/entities/session/dto/response/sessionResponse.dto';
import { ISessionFindSessionService } from '../../../../domain/interfaces/service/session/findSession/ISessionfindSessionService';

@Injectable()
export class SessionFindSessionService implements ISessionFindSessionService {
  constructor(private readonly sessionRepository: SessionRepository) {}

  /**
   * findSession
   * @param email
   * @returns
   */
  async findSession(email: string): Promise<SessionResponseDto> {
    try {
      if (email) {
        const findSession = await this.sessionRepository.findOne({ email });
        if (findSession === null)
          throw new NotFoundException('This sesion does not exist');
        return findSession;
      }
    } catch (error) {
      throw error;
    }
  }
}

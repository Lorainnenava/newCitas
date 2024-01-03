import { NotFoundException, Injectable } from '@nestjs/common';
import { SessionResponseDto } from '../../dtos/session/response/sessionResponse.dto';
import { SessionRepository } from '../../../infrastructure/repository/session/session.repository';
import { ISessionFindSessionService } from '../../../domain/interfaces/service/session/findSession/ISessionfindSessionService';

@Injectable()
export class SessionFindSessionService implements ISessionFindSessionService {
  constructor(private readonly sessionRepository: SessionRepository) {}

  /**
   * findSession
   * @param email
   * @returns
   */
  async findSession(email: string): Promise<SessionResponseDto | object> {
    try {
      if (email) {
        const findSession = await this.sessionRepository.findOne(email);
        if (findSession === null)
          throw new NotFoundException('This sesion does not exist');
        return findSession;
      }
      return { msg: 'You must provide an email' };
    } catch (error) {
      throw error;
    }
  }
}

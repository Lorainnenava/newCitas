import { NotFoundException, Injectable, Inject } from '@nestjs/common';
import { SessionResponseDto } from 'src/domain/entities/session/dto/response/sessionResponse.dto';
import { ISessionRepository } from 'src/domain/interfaces/infrastructure/session/ISession.repository';
import { ISessionGetOneService } from 'src/domain/interfaces/services/session/getOne/ISessionGetOneService';

@Injectable()
export class SessionGetOneService implements ISessionGetOneService {
  constructor(
    @Inject('SessionRepository')
    private readonly _sessionRepository: ISessionRepository,
  ) {}

  /**
   * findSession
   * @param email
   * @returns
   */
  async findOne(email: string): Promise<SessionResponseDto> {
    try {
      if (email) {
        const findSession = await this._sessionRepository.findOne({ email });

        if (findSession === null)
          throw new NotFoundException('This session does not exist');
        return findSession;
      }
    } catch (error) {
      throw error;
    }
  }
}
